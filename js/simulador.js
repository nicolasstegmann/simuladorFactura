let multipleChoiceAnswer
let m3Consumption
let invoiceAmount
let simulatorFlag = true

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
    do {
        option = prompt(message)
    } while (!checkAnswerRange(option, lowerBound, upperBound))
    return option
}

const artifact = (artifactName, artifactKcal, askDays, askHours, askPilot, askPeople) => {
    let dayQty
    let hourQty
    let pilot
    let peopleQty
    let artifactConsumption = 0
    const pilotKcal = 21
    if(askDays) {
        dayQty = promptCheck('¿Cuantos días al mes usas a ' + artifactName + '? (1 a 31)', 1, 31)
    }
    if(askHours) {
        hourQty = promptCheck('¿Cuantos horas en promedio al día usas a ' + artifactName + '? (1 a 24)', 1, 24)
    }
    if(askPilot) {
        pilot = promptCheck('¿' + artifactName + ' posee piloto?\n\
            1) Si\n\
            2) No', 1, 2)
    }
    if(askPeople) {
        peopleQty = promptCheck('¿Cuantos personas viven en el hogar? (1 a 15)', 1, 15)
    }
    switch (artifactName) {
        case 'horno':
        case 'hornalla':            
            artifactConsumption = artifactKcal * dayQty * hourQty * 2
            break
        case 'estufa':
            artifactConsumption = artifactKcal * dayQty * hourQty * 2
            if (pilot == 1) {
                artifactConsumption += pilotKcal
            }
            break
        case 'caldera':
            artifactConsumption = (23.4 * peopleQty) + (artifactKcal * 31 * 2)
            if (pilot == 1) {
                artifactConsumption += pilotKcal
            }
            break
        case 'calefón':
            artifactConsumption = 23.4 * peopleQty
            if (pilot == 1) {
                artifactConsumption += pilotKcal
            }
            break
        case 'termotanque':
            artifactConsumption = (23.4 * peopleQty) + 25.8 + pilotKcal
            break
    }
    alert('El consumo calculado para ' + artifactName + ' es de ' + parseFloat(artifactConsumption.toFixed(2)) + ' m3')
    return parseFloat(artifactConsumption.toFixed(2))

}

const artifactDesigner = () => {
    let artifactName
    let artifactKcal
    let askDays
    let askHours
    let askPilot
    let askPeople

    let artifactQty = 0
    let artifactConsumption = 0
    let continueFlag = true
    while (continueFlag) {
        multipleChoiceAnswer = promptCheck('Posees ' + artifactQty + ' artefactos y un consumo calculado de ' + artifactConsumption + ' m3. ¿Qué artefacto deseas agregar?' + ':\n\
        1) Horno\n\
        2) Hornalla\n\
        3) Estufa (2500 kcal/h)\n\
        4) Estufa (3000 kcal/h)\n\
        5) Estufa (4500 kcal/h)\n\
        6) Estufa (6000 kcal/h)\n\
        7) Estufa (9000 kcal/h)\n\
        8) Estufa (10000 kcal/h)\n\
        9) Caldera (20000 kcal/h)\n\
        10) Caldera (30000 kcal/h)\n\
        11) Caldera (40000 kcal/h)\n\
        12) Calefón\n\
        13) Termotanque\n\
        14) Finalizar\n', 1, 14)
        switch (parseInt(multipleChoiceAnswer)) {
            case 1:
                artifactName = 'horno'
                artifactKcal = 0.32
                askDays = true
                askHours = true
                askPilot = false
                askPeople = false
                break
            case 2:
                artifactName = 'hornalla'
                artifactKcal = 0.15
                askDays = true
                askHours = true
                askPilot = false
                askPeople = false
                break
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                artifactName = 'estufa'
                askDays = true
                askHours = true
                askPilot = true
                askPeople = false
                switch (parseInt(multipleChoiceAnswer)) {
                    case 3:
                        artifactKcal = 0.27
                        break
                    case 4:
                        artifactKcal = 0.32
                        break
                    case 5:
                        artifactKcal = 0.48
                        break
                    case 6:
                        artifactKcal = 0.65
                        break
                    case 7:
                        artifactKcal = 0.97
                        break
                    case 8:
                        artifactKcal = 1
                        break
                }
                break
            case 9:
            case 10:
            case 11:
                artifactName = 'caldera'
                askDays = false
                askHours = false
                askPilot = true
                askPeople = true
                switch (parseInt(multipleChoiceAnswer)) {
                    case 9:
                        artifactKcal = 2.15
                        break
                    case 10:
                        artifactKcal = 3.23
                        break
                    case 11:
                        artifactKcal = 4.3
                        break
                }
                break
            case 12:
                artifactName = 'calefón'
                artifactKcal = 1.13
                askDays = false
                askHours = false
                askPilot = true
                askPeople = true
                break
            case 13:
                artifactName = 'termotanque'
                artifactKcal = 0.35
                askDays = false
                askHours = false
                askPilot = false
                askPeople = true
                break
            default:
                continueFlag = false
        }
        if (continueFlag) {
            artifactConsumption += artifact(artifactName, artifactKcal, askDays, askHours, askPilot, askPeople)
            artifactQty++
        }
    }
    return artifactConsumption
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
    multipleChoiceAnswer = promptCheck('Primero necesitamos saber tu consumo promedio bimestral. Para ello:\n\
    1) Conoces tu consumo bimestral\n\
    2) Se calculará en base a los artefactos que tenés en tu hogar', 1, 2)
    if (multipleChoiceAnswer == 1) {
        m3Consumption = promptCheck('Ingrese su consumo promedio bimestral en metros cúbicos de gas.', 0, 1000)
    } else {
        m3Consumption = artifactDesigner()
    }

    invoiceAmount = invoiceCalculator(m3Consumption)
    alert('El consumo promedio bimestral ingresado es de ' + m3Consumption + ' m3. Para ese consumo, el valor de la factura bimestral será de AR$' + invoiceAmount + '.')

    simulatorFlag = promptCheck('¿Desea simular otro consumo?\n\
    1) Si\n\
    2) No', 1, 2) == 1? true : false
}

alert('Gracias por utilizar el simulador de facturas de Gasnor')