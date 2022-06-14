//Set toggle
const setToggleSelection = (e) => {
    if (e.target.id == 'choice1') {
        artifactDesigner()
    } else {
        m3ConsumptionInput()
    }
}

const toggleSelections = document.querySelectorAll('.toggleChoice')

toggleSelections.forEach((toggleSelection) => {
    toggleSelection.addEventListener('click', setToggleSelection)
})

//close Aside Panel
const closeAside = document.querySelector('#closeAsideBlockRight')
closeAside.addEventListener('click', closeSide)

//START
invoiceFilters()
const seleccionInicial = document.querySelector('#choice1')
if (seleccionInicial.checked) {
    artifactDesigner()
} else {
    m3ConsumptionInput()
}

