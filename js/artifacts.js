let artifactTemplates = []
let artifacts = []

const artifactToastNotification = (icon, message) => naturgyToast.fire({icon: icon, title: message})    

const artifactLocalStorage = () => {
    localStorage.setItem('artifacts', JSON.stringify(artifacts))
}

const openSide = () => {
    document.getElementById("asideBlockRight").style.width = "350px";
    document.getElementById("asideBlockLeft").style.marginRight = "350px";
}

const closeSide = () => {
    document.getElementById("asideBlockRight").style.width = "0";
    document.getElementById("asideBlockLeft").style.marginRight = "0";
}

const removeArtifact = (e) => {
    const node = e.target
    const dataId = node.getAttribute('data-id')
    artifacts.splice(dataId, 1)
    artifactLocalStorage()  
    artifactToastNotification('info', '¡Has eliminado un artefacto de tu lista!')
    updateArtifactCounter()
}

const printartifactAsideListItem = (i, {artifactName, artifactKcalDesc, artifactConsumption}) => {
    const printedArtifact =  `
        <div class="asideArtifactListItemContent">
            ${capitalizeFirstLetter(artifactName)} 
        </div>
        <div class="asideArtifactListItemContent">
            ${artifactKcalDesc}
        </div>
        <div class="asideArtifactListItemContent">
            ${artifactConsumption.toFixed(2)} m3
        </div>
        <div class="asideArtifactListItemContent">
            <a data-id="${i}" class="itemclosebtn">×</a>
        </div>
        `
    return printedArtifact
}

const updateArtifactCounter = () => {
    const artifactCounterNode = document.querySelector('#artifactBadge')
    artifacts = JSON.parse(localStorage.getItem('artifacts')) || []
    artifactCounterNode.innerHTML = artifacts.length
    const artifactAsideList = document.querySelector('#asideArtifactList')
    artifactAsideList.innerHTML = ''
    artifacts.forEach((artifact, i) => {
        const artifactAsideListItem = document.createElement('li')
        artifactAsideListItem.className = 'asideArtifactListItem'

        artifactAsideListItem.innerHTML = printartifactAsideListItem(i, artifact)

        artifactAsideList.append(artifactAsideListItem)
    })

    const deleteButtons = artifactAsideList.querySelectorAll('.itemclosebtn')

    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', removeArtifact)
    })

    const m3Consumption = () => {
        return round(artifacts.reduce((acumulator, artifact) => acumulator + artifact.artifactConsumption, 0), 2)
    }

    const targetNode = document.querySelector('#asideBlockRight')

    nodeToDelete = targetNode.querySelector('h2')
    isEmpty(nodeToDelete) || nodeToDelete.remove()

    const nodeToInsert = document.createElement('h2')
    nodeToInsert.innerHTML = `TOTAL: ${m3Consumption().toFixed(2)} m3`

    targetNode.append(nodeToInsert)

    allInvoiceCalculator(m3Consumption())
}

const addArtifact = (e) => {
    const node = e.target
    const dataId = node.getAttribute('data-id')
    const artifactTemplate = artifactTemplates.find((artifactTemplate) => artifactTemplate.artifactName == dataId)

    let selection
    let dayQty
    let hourQty
    let peopleQty
    let hasPilot = false
    let artifactKcalValue
    let artifactKcalDesc

    if (artifactTemplate.artifactAvailableKcals.length > 1) {
        selection = document.querySelector("#artifactAvailableKcals");
        artifactKcalValue = selection.options[selection.selectedIndex].value
        artifactKcalDesc = selection.options[selection.selectedIndex].text
    } else if (artifactTemplate.artifactAvailableKcals.length = 1) {
        artifactKcalValue = artifactTemplate.artifactAvailableKcals[0].artifactAvailableKcalValue
        artifactKcalDesc = artifactTemplate.artifactAvailableKcals[0].artifactAvailableKcalDesc
    } else {
        artifactKcalValue = 0
        artifactKcalDesc = ''
    }

    if (artifactTemplate.askDays) {
        selection = document.querySelector("#askDays");
        dayQty = selection.options[selection.selectedIndex].value
    }
    if (artifactTemplate.askHours) {
        selection = document.querySelector("#askHours");
        hourQty = selection.options[selection.selectedIndex].value
    }
    if (artifactTemplate.askPilot) {
        selection = document.querySelector("#askPilot");
        hasPilot = (selection.options[selection.selectedIndex].value == 'Si') ? true : false
    }
    if (artifactTemplate.askPeople) {
        selection = document.querySelector("#askPeople");
        peopleQty = selection.options[selection.selectedIndex].value
    }

    (artifactTemplate.artifactDefaultSettings) && ({peopleQty = peopleQty, dayQty = dayQty, hourQty = hourQty, hasPilot = hasPilot} = artifactTemplate.artifactDefaultSettings)

    let artifact = new Artifact(artifactTemplate.artifactName, artifactKcalValue, artifactKcalDesc, dayQty, hourQty, hasPilot, peopleQty)

    artifacts.push(artifact)
    artifactLocalStorage()
    artifactToastNotification('success', '¡Has agregado un artefacto a tu lista!')    
    updateArtifactCounter()
}

const closeArtifact = (e) => {
    const nodeToDelete = document.querySelector('#artifactConfigurator')
    isEmpty(nodeToDelete) || nodeToDelete.remove()
}

const artifactConfiguration = (e) => {
    const node = e.target
    const dataId = node.closest('.artifactCard').getAttribute('data-id')
    const artifactTemplate = artifactTemplates.find((artifactTemplate) => artifactTemplate.artifactName == dataId)
    artifactTemplate.artifactConfiguration()
}

const artifactDesigner = () => {
    let artifactTemplate
    artifactTemplates = []
    let nodeToInsert
    let referenceNode
    let nodeToDelete

    artifactTemplateModels.forEach((artifactTemplateModel) => {
        artifactTemplate = new ArtifactTemplate(artifactTemplateModel.artifactName, artifactTemplateModel.askDays, artifactTemplateModel.askHours, artifactTemplateModel.askPilot, artifactTemplateModel.askPeople, artifactTemplateModel.artifactImg, artifactTemplateModel?.artifactKcalValue, artifactTemplateModel?.artifactDefaultSettings)
        artifactTemplateModel.artifactAvailableKcals && 
            artifactTemplateModel.artifactAvailableKcals.forEach((artifactAvailableKcal) => {
                artifactTemplate.addAvailableKcal(artifactAvailableKcal.artifactAvailableKcalValue, artifactAvailableKcal.artifactAvailableKcalDesc)
            })
        artifactTemplates.push(artifactTemplate)
    })
    nodeToDelete = document.querySelector('#m3ConsumptionInput')
    isEmpty(nodeToDelete) || nodeToDelete.remove()

    nodeToInsert = document.createElement('div')
    nodeToInsert.className = 'iconBadgeGroup'
    nodeToInsert.id = 'iconBadgeGroup'
    nodeToInsert.innerHTML =
        `
        <div class="iconBadgeContainer">
            <i class="fa fa-fire iconBadgeIcon"></i>
            <div id= "artifactBadge" class="iconBadge">X</div>
        </div>
        `
    referenceNode = document.querySelector('#coolContainer')
    referenceNode.prepend(nodeToInsert)

    nodeToInsert.addEventListener('click', openSide)

    const title = document.querySelector('#artifactSelectorTitle')
    title.innerHTML = 'Seleccioná tus artefactos:'

    nodeToInsert = document.createElement('div')
    nodeToInsert.className = 'artifactSelectorList'
    nodeToInsert.id = 'artifactSelectorList'

    referenceNode = document.querySelector('#artifactSelector')
    referenceNode.append(nodeToInsert)

    artifactTemplates.forEach((artifactTemplate) => {
        const cardElement = document.createElement('div')
        cardElement.className = 'artifactCard'
        cardElement.setAttribute('data-id', artifactTemplate.artifactName)
        cardElement.innerHTML =
            `
            <div class="artifactCardImg">
                <img src="${artifactTemplate.artifactImg}">
            </div>
            <div class="artifactCardDesc">
                <h5>${artifactTemplate.artifactCapShownName()}</h5>
            </div>
            `
        nodeToInsert.append(cardElement)
        cardElement.addEventListener('click', artifactConfiguration)
    })
    artifacts = []
    updateArtifactCounter()
}

const m3ConsumptionInputCalc = (e) => {
    e.preventDefault();
    allInvoiceCalculator(parseInt(e.target[0].value))
}

const m3ConsumptionInput = () => {
    let nodeToDelete

    const title = document.querySelector('#artifactSelectorTitle')
    title.innerHTML = 'Ingresá tu consumo bimestral promedio:'
    
    const idsToDelete = ['#artifactSelectorList', '#artifactConfigurator', '#iconBadgeGroup']

    idsToDelete.forEach((idToDelete) => {
        nodeToDelete = document.querySelector(idToDelete)
        isEmpty(nodeToDelete) || nodeToDelete.remove()
    })
    closeSide()

    const nodeToInsert = document.createElement('div')
    nodeToInsert.className = 'm3ConsumptionInput'
    nodeToInsert.id = 'm3ConsumptionInput'

    nodeToInsert.innerHTML =
        `
        <form id="m3InputForm">
            <input type="number" class="formInput" id="m3Input" placeholder="Consumo Bimestral (en m3)" required=""/>
            <label for="name" class="formLabel">Consumo Bimestral (en m3)</label>
            <input type="submit" class="naturgyButton" id="m3ConsumptionInputCalc" value ="Calcular"/>
        </form>
        `

    const artifactSelectorNode = document.querySelector('#artifactSelector')
    artifactSelectorNode.append(nodeToInsert)

    const m3Form = document.querySelector('#m3InputForm')
    m3Form.addEventListener('submit', m3ConsumptionInputCalc)

    allInvoiceCalculator(0)    
}
