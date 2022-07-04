const renderizeSimulator = () => {
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
    firtTimeIntro()
}

const toggleLoader = () => {
    const loaderContainer = document.querySelector('.loader')
    loaderContainer.classList.toggle('loaderOn')
}

const sleep = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

const fetchDomainFiles = async () => {
    toggleLoader()
    const jsonFiles = ['./data/subzones.json', './data/categories.json', './data/rateTypes.json', './data/accountingConcepts.json', './data/rates.json', './data/artifactTemplateModels.json']
    const responses = jsonFiles.map(async (jsonFile) => {
        const res = await fetch(jsonFile)
        const data = await res.json()
        return data
    })
    await sleep(5) //just to simulate api delay and loader. Will delete this line if deploying in production
    toggleLoader()
    return Promise.all(responses)
    .catch(e => {
        Swal.fire({
            title: 'Error!',
            text: 'Ocurrió un error al obtener los datos de configuración',
            icon: 'error'
          })        
    })
}

const initSimulator = async () => {
    [{subzones}, {categories}, {rateTypes}, {accountingConcepts}, {rates}, {artifactTemplateModels}] = await fetchDomainFiles()
    renderizeSimulator()
}


let subzones = []
let categories = []
let rateTypes = []
let accountingConcepts = []
let rates = []
let artifactTemplateModels = []

initSimulator()