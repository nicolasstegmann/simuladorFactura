let multipleChoiceAnswer
let m3Consumption
let invoiceAmount
let simulatorFlag = true
let finalMsg
let artifacts = []

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

const invoiceCalculator = (m3Consumption) => {
    //esta fórmula va a ser cambiada a medida que avance en el curso, debido a que necesito de más herramientas del lenguaje para poder calcularla en forma correcta.
    let invoiceAmount
    const fixedChargeAmount = 455
    let gasValueAmount = 1.25 * m3Consumption
    invoiceAmount = fixedChargeAmount + gasValueAmount
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