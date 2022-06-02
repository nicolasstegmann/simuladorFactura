
//configuration domain
const subzones = [
    {id: 1, name: 'SALTA - JUJUY'},
    {id: 2, name: 'SANTIAGO - TUCUMAN'}
]

const categories = [
    {id: 1, name: 'RESIDENCIAL R', subcategories: [{id: 1, name: 'R1'}, {id: 2, name: 'R2'}, {id: 3, name: 'R3-1'}, {id: 4, name: 'R3-2'}, {id: 5, name: 'R3-3'}]},
    {id: 2, name: 'SERVICIO GENERAL P', subcategories: [{id: 1, name: 'P1'}, {id: 2, name: 'P2'}, {id: 3, name: 'P3'}]}
]

const rate_types = [
    {id: 1, name: 'NORMAL'},
    {id: 2, name: 'SOCIAL'},
    {id: 3, name: 'ZONA FRIA'},
    {id: 4, name: 'SOCIAL + ZONA FRIA'}
]

const accounting_concepts = [
    {id: 1, type: 'C', name: 'VALOR GAS'},
    {id: 2, type: 'T', name: 'CARGO FIJO'},
    {id: 3, type: 'I', name: 'IVA', rate: 0.21},
    {id: 4, type: 'I', name: 'IIBB', rate: 0.03}
]

const rates = [
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 1, conceptId: 1, amount: 5.4},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 1, conceptId: 2, amount: 100},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 2, conceptId: 1, amount: 5.5},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 2, conceptId: 2, amount: 200},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 3, conceptId: 1, amount: 5.6},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 3, conceptId: 2, amount: 300},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 4, conceptId: 1, amount: 5.8},
    {subzoneId: 1, categoryId: 1, subcategoryId: 1, rateId: 4, conceptId: 2, amount: 400},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 1, conceptId: 1, amount: 5.9},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 1, conceptId: 2, amount: 500},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 2, conceptId: 1, amount: 6.0},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 2, conceptId: 2, amount: 600},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 3, conceptId: 1, amount: 6.1},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 3, conceptId: 2, amount: 700},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 4, conceptId: 1, amount: 6.2},
    {subzoneId: 1, categoryId: 1, subcategoryId: 2, rateId: 4, conceptId: 2, amount: 800},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 1, conceptId: 1, amount: 6.3},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 1, conceptId: 2, amount: 900},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 2, conceptId: 1, amount: 6.4},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 2, conceptId: 2, amount: 1000},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 3, conceptId: 1, amount: 6.5},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 3, conceptId: 2, amount: 1100},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 4, conceptId: 1, amount: 6.6},
    {subzoneId: 1, categoryId: 1, subcategoryId: 3, rateId: 4, conceptId: 2, amount: 1200},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 1, conceptId: 1, amount: 6.7},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 1, conceptId: 2, amount: 1300},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 2, conceptId: 1, amount: 6.8},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 2, conceptId: 2, amount: 1400},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 3, conceptId: 1, amount: 6.9},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 3, conceptId: 2, amount: 1500},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 4, conceptId: 1, amount: 7.0},
    {subzoneId: 1, categoryId: 1, subcategoryId: 4, rateId: 4, conceptId: 2, amount: 1600},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 1, conceptId: 1, amount: 7.1},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 1, conceptId: 2, amount: 1700},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 2, conceptId: 1, amount: 7.2},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 2, conceptId: 2, amount: 1800},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 3, conceptId: 1, amount: 7.3},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 3, conceptId: 2, amount: 1900},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 4, conceptId: 1, amount: 7.4},
    {subzoneId: 1, categoryId: 1, subcategoryId: 5, rateId: 4, conceptId: 2, amount: 2000},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 1, conceptId: 1, amount: 7.5},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 1, conceptId: 2, amount: 2100},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 2, conceptId: 1, amount: 7.6},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 2, conceptId: 2, amount: 2200},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 3, conceptId: 1, amount: 7.7},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 3, conceptId: 2, amount: 2300},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 4, conceptId: 1, amount: 7.8},
    {subzoneId: 1, categoryId: 2, subcategoryId: 1, rateId: 4, conceptId: 2, amount: 2400},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 1, conceptId: 1, amount: 7.9},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 1, conceptId: 2, amount: 2500},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 2, conceptId: 1, amount: 8.0},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 2, conceptId: 2, amount: 2600},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 3, conceptId: 1, amount: 8.1},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 3, conceptId: 2, amount: 2700},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 4, conceptId: 1, amount: 8.2},
    {subzoneId: 1, categoryId: 2, subcategoryId: 2, rateId: 4, conceptId: 2, amount: 2800},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 1, conceptId: 1, amount: 8.3},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 1, conceptId: 2, amount: 2900},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 2, conceptId: 1, amount: 8.4},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 2, conceptId: 2, amount: 3000},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 3, conceptId: 1, amount: 8.5},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 3, conceptId: 2, amount: 3100},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 4, conceptId: 1, amount: 8.6},
    {subzoneId: 1, categoryId: 2, subcategoryId: 3, rateId: 4, conceptId: 2, amount: 3200},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 1, conceptId: 1, amount: 8.7},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 1, conceptId: 2, amount: 3300},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 2, conceptId: 1, amount: 8.8},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 2, conceptId: 2, amount: 3400},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 3, conceptId: 1, amount: 8.9},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 3, conceptId: 2, amount: 3500},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 4, conceptId: 1, amount: 9.0},
    {subzoneId: 2, categoryId: 1, subcategoryId: 1, rateId: 4, conceptId: 2, amount: 3600},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 1, conceptId: 1, amount: 9.1},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 1, conceptId: 2, amount: 3700},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 2, conceptId: 1, amount: 9.2},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 2, conceptId: 2, amount: 3800},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 3, conceptId: 1, amount: 9.3},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 3, conceptId: 2, amount: 3900},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 4, conceptId: 1, amount: 9.4},
    {subzoneId: 2, categoryId: 1, subcategoryId: 2, rateId: 4, conceptId: 2, amount: 4000},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 1, conceptId: 1, amount: 9.5},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 1, conceptId: 2, amount: 4100},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 2, conceptId: 1, amount: 9.6},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 2, conceptId: 2, amount: 4200},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 3, conceptId: 1, amount: 9.7},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 3, conceptId: 2, amount: 4300},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 4, conceptId: 1, amount: 9.8},
    {subzoneId: 2, categoryId: 1, subcategoryId: 3, rateId: 4, conceptId: 2, amount: 4400},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 1, conceptId: 1, amount: 9.9},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 1, conceptId: 2, amount: 4500},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 2, conceptId: 1, amount: 10.0},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 2, conceptId: 2, amount: 4600},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 3, conceptId: 1, amount: 10.1},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 3, conceptId: 2, amount: 4700},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 4, conceptId: 1, amount: 10.2},
    {subzoneId: 2, categoryId: 1, subcategoryId: 4, rateId: 4, conceptId: 2, amount: 4800},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 1, conceptId: 1, amount: 10.3},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 1, conceptId: 2, amount: 4900},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 2, conceptId: 1, amount: 10.4},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 2, conceptId: 2, amount: 5000},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 3, conceptId: 1, amount: 10.5},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 3, conceptId: 2, amount: 5100},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 4, conceptId: 1, amount: 10.6},
    {subzoneId: 2, categoryId: 1, subcategoryId: 5, rateId: 4, conceptId: 2, amount: 5200},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 1, conceptId: 1, amount: 10.7},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 1, conceptId: 2, amount: 5300},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 2, conceptId: 1, amount: 10.8},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 2, conceptId: 2, amount: 5400},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 3, conceptId: 1, amount: 10.9},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 3, conceptId: 2, amount: 5500},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 4, conceptId: 1, amount: 11.0},
    {subzoneId: 2, categoryId: 2, subcategoryId: 1, rateId: 4, conceptId: 2, amount: 5600},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 1, conceptId: 1, amount: 11.1},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 1, conceptId: 2, amount: 5700},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 2, conceptId: 1, amount: 11.2},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 2, conceptId: 2, amount: 5800},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 3, conceptId: 1, amount: 11.3},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 3, conceptId: 2, amount: 5900},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 4, conceptId: 1, amount: 11.4},
    {subzoneId: 2, categoryId: 2, subcategoryId: 2, rateId: 4, conceptId: 2, amount: 6000},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 1, conceptId: 1, amount: 11.5},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 1, conceptId: 2, amount: 6100},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 2, conceptId: 1, amount: 11.6},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 2, conceptId: 2, amount: 6200},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 3, conceptId: 1, amount: 11.7},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 3, conceptId: 2, amount: 6300},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 4, conceptId: 1, amount: 11.8},
    {subzoneId: 2, categoryId: 2, subcategoryId: 3, rateId: 4, conceptId: 2, amount: 6400}
]

let multipleChoiceAnswer
let m3Consumption
let invoiceAmount
let simulatorFlag = true
let finalMsg
let artifacts = []
let invoiceDetails = []

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const round = (value, decimals) => Number(Math.round(value+'e'+decimals)+'e-'+decimals)

const isEmpty = (val) => {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

const checkAnswerRange = (option, lowerBound, upperBound) => {
    let checkResult = true
    if (option > upperBound || isNaN(option) || option === null) {
        checkResult = false
        alert('¡Respuesta incorrecta! Debe ingresar una opción entre ' + lowerBound + ' y ' + upperBound)
    }
    return checkResult
}

const promptCheck = (message, lowerBound, upperBound) => {
    let option
    option = prompt(message)
    if (checkAnswerRange(option, lowerBound, upperBound)) {
        return option
    } else {
        return promptCheck(message, lowerBound, upperBound)
    }
}

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
            this.artifactAvailableKcalDesc = artifactAvailableKcalDesc
    }
}

class ArtifactTemplate {
    constructor(artifactName, askDays, askHours, askPilot, askPeople, artifactAvailableKcalValue, artifactAvailableKcalDesc) {
        this.artifactName = artifactName,
            this.artifactAvailableKcals = [],
            this.askDays = askDays,
            this.askHours = askHours,
            this.askPilot = askPilot,
            this.askPeople = askPeople
        if (!isNaN(artifactAvailableKcalValue)) {
            this.addAvailableKcal(artifactAvailableKcalValue, artifactAvailableKcalDesc)
        }
    }
    artifactCapShownName = () => {
        return capitalizeFirstLetter(this.artifactName)
    }
    addAvailableKcal = (artifactAvailableKcalValue, artifactAvailableKcalDesc) => {
        let artifactAvailableKcal = new ArtifactAvailableKcal(artifactAvailableKcalValue, artifactAvailableKcalDesc)
        this.artifactAvailableKcals.push(artifactAvailableKcal)
    }
    createArtifact = () => {
        let dayQty
        let hourQty
        let peopleQty
        let hasPilot = false
        let artifactKcalValue
        let artifactKcalDesc

        if (this.artifactAvailableKcals.length > 1) {
            multipleChoiceAnswer = promptCheck('Seleccioná las kcal de ' + this.artifactName + '(1 a ' + this.artifactAvailableKcals.length + '):\n' +
                getListMsg(this.artifactAvailableKcals, 'artifactAvailableKcalDesc'), 1, (this.artifactAvailableKcals.length))

            artifactKcalValue = this.artifactAvailableKcals[multipleChoiceAnswer - 1].artifactAvailableKcalValue
            artifactKcalDesc = this.artifactAvailableKcals[multipleChoiceAnswer - 1].artifactAvailableKcalDesc

        } else if (this.artifactAvailableKcals.length = 1) {
            artifactKcalValue = this.artifactAvailableKcals[0].artifactAvailableKcalValue
        } else {
            artifactKcalValue = 0
        }

        if (this.askDays) {
            dayQty = promptCheck('¿Cuantos días al mes usas a ' + this.artifactName + '? (1 a 31)', 1, 31)
        }
        if (this.askHours) {
            hourQty = promptCheck('¿Cuantos horas en promedio al día usas a ' + this.artifactName + '? (1 a 24)', 1, 24)
        }
        if (this.askPilot) {
            hasPilot = confirm('¿' + this.artifactCapShownName() + ' posee piloto?')
        }
        if (this.askPeople) {
            peopleQty = promptCheck('¿Cuantos personas viven en el hogar? (1 a 15)', 1, 15)
        }

        switch (this.artifactName) {
            case 'horno':
            case 'hornalla':
            case 'estufa':
                peopleQty = 0
                break
            case 'caldera':
                dayQty = 31
                hourQty = 1
                break
            case 'calefón':
                dayQty = 0
                hourQty = 0
                break
            case 'termotanque':
                dayQty = 31
                hourQty = 1.189
                hasPilot = true
                break
        }

        let artifact = new Artifact(this.artifactName, artifactKcalValue, artifactKcalDesc, dayQty, hourQty, hasPilot, peopleQty)

        artifacts.push(artifact)
        alert('El consumo calculado para ' + artifact.artifactName + ' es de ' + artifact.artifactConsumption.toFixed(2) + ' m3')
    }
}

const getListMsg = (array, display) => {
    let listMsg = ''
    array.forEach((element) => {
        listMsg += (array.indexOf(element) + 1) + ') ' + (isEmpty(display) ? element : capitalizeFirstLetter(element[display])) + '\n'
    })
    return listMsg
}

const artifactDesigner = () => {
    let artifactTemplate
    let artifactTemplates = []
    let continueFlag = true

    m3Consumption = 0

    artifactTemplate = new ArtifactTemplate('horno', true, true, false, false, 0.32)
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('hornalla', true, true, false, false, 0.15)
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('estufa', true, true, true, false)
    artifactTemplate.addAvailableKcal(0.27, '2500 kcal/h')
    artifactTemplate.addAvailableKcal(0.32, '3000 kcal/h')
    artifactTemplate.addAvailableKcal(0.48, '4500 kcal/h')
    artifactTemplate.addAvailableKcal(0.65, '6000 kcal/h')
    artifactTemplate.addAvailableKcal(0.97, '9000 kcal/h')
    artifactTemplate.addAvailableKcal(1, '10000 kcal/h')
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('caldera', false, false, true, true)
    artifactTemplate.addAvailableKcal(2.15, '20000 kcal/h')
    artifactTemplate.addAvailableKcal(3.23, '30000 kcal/h')
    artifactTemplate.addAvailableKcal(4.3, '40000 kcal/h')
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('calefón', false, false, true, true, 1.13)
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('termotanque', false, false, false, true, 0.35)
    artifactTemplates.push(artifactTemplate)

    while (continueFlag) {
        multipleChoiceAnswer = parseInt(promptCheck('Posees ' + artifacts.length + ' artefactos y un consumo calculado de ' + m3Consumption + ' m3. ¿Qué artefacto deseas agregar?' + ':\n' +
            getListMsg(artifactTemplates, 'artifactName') + (artifactTemplates.length + 1) + ') Finalizar\n', 1, (artifactTemplates.length + 1)))

        if (multipleChoiceAnswer >= 1 && multipleChoiceAnswer <= artifactTemplates.length) {
            chosenArtifact = artifactTemplates[multipleChoiceAnswer - 1].createArtifact()
        } else {
            continueFlag = false
        }

        if (continueFlag) {
            m3Consumption = round(parseFloat(artifacts.reduce((acum, artifact) => acum + artifact.artifactConsumption, 0)), 2)
        }
    }
}

const getObjectArrayValuebyId = (array, id, key) => {
    return array.find((element) => element.id == id )[key];
}

class InvoiceDetail
{
    constructor(subzoneId, categoryId, subcategoryId, rateId, conceptId, rateAmount, m3Consumption) {
        this.subzoneId = subzoneId,
        this.categoryId = categoryId,
        this.subcategoryId = subcategoryId,
        this.rateId = rateId,
        this.conceptId = conceptId,
        this.subTotal = this.amountCalculator(rateAmount, m3Consumption),
        this.taxDetails = this.taxesCalculator(),
        this.taxTotal = this.taxTotalCalculator(),
        this.total = round(this.subTotal + this.taxTotal, 2)
    }
    amountCalculator = (rateAmount, m3Consumption) => {
        let amount
        if (getObjectArrayValuebyId(accounting_concepts, this.conceptId, 'type') == 'C') {
            amount = rateAmount * m3Consumption
        } else {
            amount = rateAmount
        }
        return amount
    }
    taxesCalculator = () => {
        let taxes = []
        let taxes_accounting_concepts = accounting_concepts.filter((accounting_concept) => accounting_concept.type == 'I')
        taxes = taxes_accounting_concepts.map((taxes_accounting_concept) => {
            return {taxId: taxes_accounting_concept.id, taxName: taxes_accounting_concept.name, taxAmount: round(taxes_accounting_concept.rate * this.subTotal, 2)}
        })
        return taxes
    }
    taxTotalCalculator = () => round(this.taxDetails.reduce((acumulator, taxDetail) => acumulator + taxDetail.taxAmount, 0), 2)
}

const allInvoiceCalculator = (m3Consumption) => {
    let invoiceAmount
    invoiceDetails = []
    rates.forEach((rate) => {
        let invoiceDetail = new InvoiceDetail(rate.subzoneId, rate.categoryId, rate.subcategoryId, rate.rateId, rate.conceptId, rate.amount, m3Consumption)
        invoiceDetails.push(invoiceDetail)
    })
    return invoiceDetails
}

const invoiceCalculator = (m3Consumption) => {
    let invoiceAmount
    let subcategories = []
    let invoiceDetailsFilter = allInvoiceCalculator(m3Consumption)

    multipleChoiceAnswer = promptCheck('Seleccioná la subzona:\n' + getListMsg(subzones, 'name'), 1, (subzones.length))
    let subzoneId = subzones[multipleChoiceAnswer - 1].id

    multipleChoiceAnswer = promptCheck('Seleccioná la categoría:\n' + getListMsg(categories, 'name'), 1, (categories.length))
    let categoryId = categories[multipleChoiceAnswer - 1].id

    subcategories = categories[multipleChoiceAnswer - 1].subcategories

    multipleChoiceAnswer = promptCheck('Seleccioná la subcategoría:\n' + getListMsg(subcategories, 'name'), 1, (subcategories.length))
    let subcategoryId = subcategories[multipleChoiceAnswer - 1].id

    multipleChoiceAnswer = promptCheck('Seleccioná el esquema tarifario:\n' + getListMsg(rate_types, 'name'), 1, (rate_types.length))
    let rateId = rate_types[multipleChoiceAnswer - 1].id

    invoiceDetailsFilter = invoiceDetailsFilter.filter((invoiceDetail) => invoiceDetail.subzoneId == subzoneId && invoiceDetail.categoryId == categoryId && invoiceDetail.subcategoryId == subcategoryId && invoiceDetail.rateId == rateId)
    
    console.log(invoiceDetailsFilter)

    invoiceAmount = round(invoiceDetailsFilter.reduce((acum, invoiceDetail) => acum + invoiceDetail.total, 0), 2)

    return invoiceAmount
}

alert('Bienvenido al simulador de facturas de Gasnor')
while (simulatorFlag) {
    artifacts = []
    multipleChoiceAnswer = promptCheck('Primero necesitamos saber tu consumo promedio bimestral. Para ello:\n\
    1) Conoces tu consumo bimestral\n\
    2) Se calculará en base a los artefactos que tenés en tu hogar', 1, 2)
    if (multipleChoiceAnswer == 1) {
        m3Consumption = promptCheck('Ingrese su consumo promedio bimestral en metros cúbicos de gas.', 0, 1000)
    } else {
        artifactDesigner()
    }

    invoiceAmount = invoiceCalculator(m3Consumption)

    finalMsg = 'El consumo promedio bimestral ingresado es de ' + parseFloat(m3Consumption).toFixed(2) + ' m3. Para ese consumo, el valor de la factura bimestral será de AR$' + invoiceAmount + '.'

    if (artifacts.length > 0) {
        let maxConsumption = Math.max(...artifacts.map((artifact) => artifact.artifactConsumption));

        let hightestConsumptionArtifacts = (artifacts.filter((artifact) => artifact.artifactConsumption >= maxConsumption)).map((artifact) => artifact.artifactCapShownName() + (!isEmpty(artifact.artifactKcalDesc)? ' (' + artifact.artifactKcalDesc + ')':''))

        finalMsg += '\n'
        finalMsg += 'Los siguientes artefactos poseen el mayor consumo (' + maxConsumption + 'm3):'
        finalMsg += '\n'
        finalMsg += hightestConsumptionArtifacts.join('\n')
    }

    alert(finalMsg)

    simulatorFlag = confirm('¿Desea simular otro consumo?')
}

alert('Gracias por utilizar el simulador de facturas de Gasnor')