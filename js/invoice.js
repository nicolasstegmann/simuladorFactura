let invoiceDetails = []

let selectedSubzoneId
let selectedCategoryId
let selectedSubCategoryId
let selectedRateTypeId

const changeComboValue = (e) => {
    if (e.target.id == 'categories') {
        const selectedCategories = categories.filter((category) => category.id == e.target.value)
        const referenceNode = document.querySelector('#subcategories')
        referenceNode.innerHTML = ''

        selectedCategories[0].subcategories.forEach((element) => {
            const anOption = document.createElement('option')
            anOption.value = element['id']
            anOption.innerHTML = element['name']
            referenceNode.append(anOption)
        })
        selectedSubCategoryId = selectedCategories[0].subcategories[0].id
    }
    switch (e.target.id) {
        case 'subzones':
            selectedSubzoneId = e.target.value
            break;
        case 'categories':
            selectedCategoryId = e.target.value
            break;
        case 'subcategories':
            selectedSubCategoryId = e.target.value
            break;
        case 'rateTypes':
            selectedRateTypeId = e.target.value
            break;
    }
    invoiceCalculator()
}

const invoiceFilters = () => {
    const referenceNode = document.querySelector('.invoiceForm')
    const combos = [{
            comboId: 'subzones',
            comboLabel: 'Subzona',
            comboArray: subzones,
            comboArrayValue: 'id',
            comboArrayDescription: 'name'
        },
        {
            comboId: 'categories',
            comboLabel: 'Categoría',
            comboArray: categories,
            comboArrayValue: 'id',
            comboArrayDescription: 'name'
        },
        {
            comboId: 'subcategories',
            comboLabel: 'Subcategoría',
            comboArray: categories[0].subcategories,
            comboArrayValue: 'id',
            comboArrayDescription: 'name'
        },
        {
            comboId: 'rateTypes',
            comboLabel: 'Tarifario',
            comboArray: rateTypes,
            comboArrayValue: 'id',
            comboArrayDescription: 'name'
        }
    ]

    combos.forEach((combo) => {
        createComboBox(referenceNode, combo.comboId, combo.comboLabel, combo.comboArray, combo.comboArrayValue, combo.comboArrayDescription)
        switch (combo.comboId) {
            case 'subzones':
                selectedSubzoneId = combo.comboArray[0][combo.comboArrayValue]
                break;
            case 'categories':
                selectedCategoryId = combo.comboArray[0][combo.comboArrayValue]
                break;
            case 'subcategories':
                selectedSubCategoryId = combo.comboArray[0][combo.comboArrayValue]
                break;
            case 'rateTypes':
                selectedRateTypeId = combo.comboArray[0][combo.comboArrayValue]
                break;
        }
        const referenceNode2 = document.querySelector(`#${combo.comboId}`)
        referenceNode2.addEventListener('change', changeComboValue)
    })
}

const allInvoiceCalculator = (m3Consumption) => {
    invoiceDetails = []
    rates.forEach((rate) => {
        let invoiceDetail = new InvoiceDetail(rate.subzoneId, rate.categoryId, rate.subcategoryId, rate.rateId, rate.conceptId, rate.amount, m3Consumption)
        invoiceDetails.push(invoiceDetail)
    })
    invoiceCalculator()
}

const invoicePrinter = (invoiceDetailsFilter) => {
    //non taxes
    let invoiceDetailsPrint = invoiceDetailsFilter.map((invoiceDetail) => {
        return {
            accountingConceptId: invoiceDetail.conceptId,
            accountingConceptName: getObjectArrayValuebyId(accountingConcepts, invoiceDetail.conceptId, 'name'),
            accountingConceptAmount: invoiceDetail.subTotal
        }
    })
    //taxes
    let invoiceDetailTaxes = []
    invoiceDetailsFilter.forEach((invoiceDetail) => {
        invoiceDetailTaxes = invoiceDetailTaxes.concat(invoiceDetail.taxDetails)
    })
    //agregate functions
    let invoiceAggregateTaxes = []
    invoiceAggregateTaxes = invoiceDetailTaxes.reduce((acum, invoiceDetailTax) => {
        if (!acum[invoiceDetailTax.taxId]) {
            acum[invoiceDetailTax.taxId] = {
                taxId: invoiceDetailTax.taxId,
                taxAmount: 0
            };
            invoiceAggregateTaxes.push(acum[invoiceDetailTax.taxId])
        }
        acum[invoiceDetailTax.taxId].taxAmount += invoiceDetailTax.taxAmount;
        return acum;
    }, []).filter(Object);

    invoiceDetailsPrint = invoiceDetailsPrint.concat(invoiceAggregateTaxes.map((invoiceDetail) => {
        return {
            accountingConceptId: invoiceDetail.taxId,
            accountingConceptName: getObjectArrayValuebyId(accountingConcepts, invoiceDetail.taxId, 'name'),
            accountingConceptAmount: invoiceDetail.taxAmount
        }
    }))

    return invoiceDetailsPrint
}

const invoiceCalculator = () => {
    let invoiceAmount
    const invoiceDetailsFilter = invoiceDetails.filter((invoiceDetail) => invoiceDetail.subzoneId == selectedSubzoneId && invoiceDetail.categoryId == selectedCategoryId && invoiceDetail.subcategoryId == selectedSubCategoryId && invoiceDetail.rateId == selectedRateTypeId)
    invoiceAmount = round(invoiceDetailsFilter.reduce((acum, invoiceDetail) => acum + invoiceDetail.total, 0), 2)
    const invoiceDetailList = document.querySelector('#invoiceDetailList')
    invoiceDetailList.innerHTML = ''

    invoicePrinter(invoiceDetailsFilter).forEach((invoiceDetail) => {
        const invoiceDetailListItem = document.createElement('li')
        invoiceDetailListItem.className = 'invoiceDetailItem'

        invoiceDetailListItem.innerHTML =
            `
            <div class="invoiceDetailItemDesc">
                ${invoiceDetail.accountingConceptName}
            </div>
            <div class="invoiceDetailItemAmount">
                $${invoiceDetail.accountingConceptAmount.toFixed(2)} 
            </div>
            `
        invoiceDetailList.append(invoiceDetailListItem)
    })

    const invoiceDetailTotal = document.querySelector('#invoiceDetailTotal')
    invoiceDetailTotal.innerHTML = `Total a facturar: $${invoiceAmount}`
}