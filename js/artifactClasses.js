class Artifact {
    constructor(artifactName, artifactKcalValue, artifactKcalDesc, dayQty, hourQty, hasPilot, peopleQty) {
        const pilotKcal = 21
        this.artifactName = artifactName,
            this.artifactKcalValue = artifactKcalValue,
            this.artifactKcalDesc = artifactKcalDesc,
            this.dayQty = dayQty,
            this.hourQty = hourQty,
            this.hasPilot = hasPilot,
            this.peopleQty = peopleQty,
            this.artifactConsumption = round(parseFloat((this.artifactKcalValue * dayQty * hourQty * 2) + (pilotKcal * (hasPilot ? 1 : 0)) + (23.4 * peopleQty)), 2)
    }
    artifactCapShownName = () => {
        return capitalizeFirstLetter(this.artifactName)
    }
}

class ArtifactAvailableKcal {
    constructor(artifactAvailableKcalValue, artifactAvailableKcalDesc) {
        this.artifactAvailableKcalValue = artifactAvailableKcalValue,
        this.artifactAvailableKcalDesc = !isEmpty(artifactAvailableKcalDesc) ? artifactAvailableKcalDesc : ''
    }
}

class ArtifactTemplate {
    constructor(artifactName, askDays, askHours, askPilot, askPeople, artifactImg, artifactAvailableKcalValue, artifactDefaultSettings) {
        this.artifactName = artifactName,
        this.artifactAvailableKcals = [],
        this.askDays = askDays,
        this.askHours = askHours,
        this.askPilot = askPilot,
        this.askPeople = askPeople,
        this.artifactImg = artifactImg,
        this.artifactDefaultSettings = {},
        this.artifactDefaultSettings = artifactDefaultSettings,
        isNaN(artifactAvailableKcalValue) || this.addAvailableKcal(artifactAvailableKcalValue)
    }
    artifactCapShownName = () => {
        return capitalizeFirstLetter(this.artifactName)
    }
    addAvailableKcal = (artifactAvailableKcalValue, artifactAvailableKcalDesc) => {
        let artifactAvailableKcal = new ArtifactAvailableKcal(artifactAvailableKcalValue, artifactAvailableKcalDesc)
        this.artifactAvailableKcals.push(artifactAvailableKcal)
    }
    artifactConfiguration = () => {
        const nodeToDelete = document.querySelector('#artifactConfigurator')
        isEmpty(nodeToDelete) || nodeToDelete.remove()

        const nodeToInsert = document.createElement('div')
        nodeToInsert.className = 'artifactConfigurator'
        nodeToInsert.id = 'artifactConfigurator'

        nodeToInsert.innerHTML =
            `
            <h3>Configuraci??n de ${this.artifactCapShownName()}</h3>
            <form class="artifactForm">
            </form>
            <button data-id= "${this.artifactName}" id="addArtifact" class="naturgyButton">Agregar</button>
            <button data-id= "${this.artifactName}" id="cancelArtifact" class="naturgyButton">Cerrar</button>
            `

        const artifactSelectorNode = document.querySelector('#artifactSelector')
        artifactSelectorNode.append(nodeToInsert)

        const referenceNode = document.querySelector('.artifactForm')

        this.artifactAvailableKcals.length > 1 && createComboBox(referenceNode, 'artifactAvailableKcals', '??Cual es su consumo en kcal/h?', this.artifactAvailableKcals, 'artifactAvailableKcalValue', 'artifactAvailableKcalDesc')
        this.askDays && createComboBox(referenceNode, 'askDays', '??Cuantos d??as al mes los usas?', createNumericArray(1, 31))
        this.askHours && createComboBox(referenceNode, 'askHours', '??Cuantos horas al d??a los usas?', createNumericArray(1, 24))
        this.askPilot && createComboBox(referenceNode, 'askPilot', '??Posee piloto?', ['Si', 'No'])
        this.askPeople && createComboBox(referenceNode, 'askPeople', '??Cuantos personas viven en el hogar?', createNumericArray(1, 15))

        const addButton = document.querySelector('#addArtifact')
        addButton.addEventListener('click', addArtifact)
        const closeButton = document.querySelector('#cancelArtifact')
        closeButton.addEventListener('click', closeArtifact)
    }
}
