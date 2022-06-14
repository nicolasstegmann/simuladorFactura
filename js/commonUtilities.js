const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const round = (value, decimals) => Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)

const isEmpty = (val) => {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

const createComboBox = (parent, id, label, array, value, description) => {
    const comboContainer = document.createElement('div')
    comboContainer.className = 'combobox'

    const comboLabel = document.createElement('label')
    comboLabel.for = id
    comboLabel.className = 'comboLabel'
    comboLabel.innerHTML = label
    comboContainer.append(comboLabel)

    const selectContainer = document.createElement('select')
    selectContainer.id = id

    array.forEach((element) => {
        const anOption = document.createElement('option')
        if (!isEmpty(value) && !isEmpty(description)) {
            anOption.value = element[value]
            anOption.innerHTML = element[description]
        } else {
            anOption.value = element
            anOption.innerHTML = element
        }
        selectContainer.append(anOption)
    })
    comboContainer.append(selectContainer)
    parent.append(comboContainer)
}

const createNumericArray = (lowerbound, upperBound) => {
    const returnArray = []

    for (let i = lowerbound; i <= upperBound; i++) {
        returnArray.push(i)
    }

    return returnArray
}

const getObjectArrayValuebyId = (array, id, key) => {
    return array.find((element) => element.id == id)[key];
}