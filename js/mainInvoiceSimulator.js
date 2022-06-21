//Set toggle
const setToggleSelection = (e) => e.target.id == 'choice1' ? artifactDesigner() : m3ConsumptionInput()

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
seleccionInicial.checked ? artifactDesigner() : m3ConsumptionInput()