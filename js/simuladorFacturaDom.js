//configuration domain
const subzones = [{
        id: 1,
        name: 'SALTA - JUJUY'
    },
    {
        id: 2,
        name: 'SANTIAGO - TUCUMAN'
    }
]

const categories = [{
        id: 1,
        name: 'RESIDENCIAL R',
        subcategories: [{
            id: 1,
            name: 'R1'
        }, {
            id: 2,
            name: 'R2'
        }, {
            id: 3,
            name: 'R3-1'
        }, {
            id: 4,
            name: 'R3-2'
        }, {
            id: 5,
            name: 'R3-3'
        }]
    },
    {
        id: 2,
        name: 'SERVICIO GENERAL P',
        subcategories: [{
            id: 1,
            name: 'P1'
        }, {
            id: 2,
            name: 'P2'
        }, {
            id: 3,
            name: 'P3'
        }]
    }
]

const rate_types = [{
        id: 1,
        name: 'NORMAL'
    },
    {
        id: 2,
        name: 'SOCIAL'
    },
    {
        id: 3,
        name: 'ZONA FRIA'
    },
    {
        id: 4,
        name: 'SOCIAL + ZONA FRIA'
    }
]

const accounting_concepts = [{
        id: 1,
        type: 'C',
        name: 'VALOR GAS'
    },
    {
        id: 2,
        type: 'T',
        name: 'CARGO FIJO'
    },
    {
        id: 3,
        type: 'I',
        name: 'IVA',
        rate: 0.21
    },
    {
        id: 4,
        type: 'I',
        name: 'IIBB',
        rate: 0.03
    }
]

const rates = [{
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 1,
        amount: 5.4
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 2,
        amount: 100
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 1,
        amount: 5.5
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 2,
        amount: 200
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 1,
        amount: 5.6
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 2,
        amount: 300
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 1,
        amount: 5.8
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 2,
        amount: 400
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 1,
        amount: 5.9
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 2,
        amount: 500
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 1,
        amount: 6.0
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 2,
        amount: 600
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 1,
        amount: 6.1
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 2,
        amount: 700
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 1,
        amount: 6.2
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 2,
        amount: 800
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 1,
        amount: 6.3
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 2,
        amount: 900
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 1,
        amount: 6.4
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 2,
        amount: 1000
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 1,
        amount: 6.5
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 2,
        amount: 1100
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 1,
        amount: 6.6
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 2,
        amount: 1200
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 1,
        conceptId: 1,
        amount: 6.7
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 1,
        conceptId: 2,
        amount: 1300
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 2,
        conceptId: 1,
        amount: 6.8
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 2,
        conceptId: 2,
        amount: 1400
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 3,
        conceptId: 1,
        amount: 6.9
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 3,
        conceptId: 2,
        amount: 1500
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 4,
        conceptId: 1,
        amount: 7.0
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 4,
        conceptId: 2,
        amount: 1600
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 1,
        conceptId: 1,
        amount: 7.1
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 1,
        conceptId: 2,
        amount: 1700
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 2,
        conceptId: 1,
        amount: 7.2
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 2,
        conceptId: 2,
        amount: 1800
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 3,
        conceptId: 1,
        amount: 7.3
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 3,
        conceptId: 2,
        amount: 1900
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 4,
        conceptId: 1,
        amount: 7.4
    },
    {
        subzoneId: 1,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 4,
        conceptId: 2,
        amount: 2000
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 1,
        amount: 7.5
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 2,
        amount: 2100
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 1,
        amount: 7.6
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 2,
        amount: 2200
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 1,
        amount: 7.7
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 2,
        amount: 2300
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 1,
        amount: 7.8
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 2,
        amount: 2400
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 1,
        amount: 7.9
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 2,
        amount: 2500
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 1,
        amount: 8.0
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 2,
        amount: 2600
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 1,
        amount: 8.1
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 2,
        amount: 2700
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 1,
        amount: 8.2
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 2,
        amount: 2800
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 1,
        amount: 8.3
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 2,
        amount: 2900
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 1,
        amount: 8.4
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 2,
        amount: 3000
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 1,
        amount: 8.5
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 2,
        amount: 3100
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 1,
        amount: 8.6
    },
    {
        subzoneId: 1,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 2,
        amount: 3200
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 1,
        amount: 8.7
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 2,
        amount: 3300
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 1,
        amount: 8.8
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 2,
        amount: 3400
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 1,
        amount: 8.9
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 2,
        amount: 3500
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 1,
        amount: 9.0
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 2,
        amount: 3600
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 1,
        amount: 9.1
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 2,
        amount: 3700
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 1,
        amount: 9.2
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 2,
        amount: 3800
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 1,
        amount: 9.3
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 2,
        amount: 3900
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 1,
        amount: 9.4
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 2,
        amount: 4000
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 1,
        amount: 9.5
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 2,
        amount: 4100
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 1,
        amount: 9.6
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 2,
        amount: 4200
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 1,
        amount: 9.7
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 2,
        amount: 4300
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 1,
        amount: 9.8
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 2,
        amount: 4400
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 1,
        conceptId: 1,
        amount: 9.9
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 1,
        conceptId: 2,
        amount: 4500
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 2,
        conceptId: 1,
        amount: 10.0
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 2,
        conceptId: 2,
        amount: 4600
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 3,
        conceptId: 1,
        amount: 10.1
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 3,
        conceptId: 2,
        amount: 4700
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 4,
        conceptId: 1,
        amount: 10.2
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 4,
        rateId: 4,
        conceptId: 2,
        amount: 4800
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 1,
        conceptId: 1,
        amount: 10.3
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 1,
        conceptId: 2,
        amount: 4900
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 2,
        conceptId: 1,
        amount: 10.4
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 2,
        conceptId: 2,
        amount: 5000
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 3,
        conceptId: 1,
        amount: 10.5
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 3,
        conceptId: 2,
        amount: 5100
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 4,
        conceptId: 1,
        amount: 10.6
    },
    {
        subzoneId: 2,
        categoryId: 1,
        subcategoryId: 5,
        rateId: 4,
        conceptId: 2,
        amount: 5200
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 1,
        amount: 10.7
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 1,
        conceptId: 2,
        amount: 5300
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 1,
        amount: 10.8
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 2,
        conceptId: 2,
        amount: 5400
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 1,
        amount: 10.9
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 3,
        conceptId: 2,
        amount: 5500
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 1,
        amount: 11.0
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 1,
        rateId: 4,
        conceptId: 2,
        amount: 5600
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 1,
        amount: 11.1
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 1,
        conceptId: 2,
        amount: 5700
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 1,
        amount: 11.2
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 2,
        conceptId: 2,
        amount: 5800
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 1,
        amount: 11.3
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 3,
        conceptId: 2,
        amount: 5900
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 1,
        amount: 11.4
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 2,
        rateId: 4,
        conceptId: 2,
        amount: 6000
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 1,
        amount: 11.5
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 1,
        conceptId: 2,
        amount: 6100
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 1,
        amount: 11.6
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 2,
        conceptId: 2,
        amount: 6200
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 1,
        amount: 11.7
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 3,
        conceptId: 2,
        amount: 6300
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 1,
        amount: 11.8
    },
    {
        subzoneId: 2,
        categoryId: 2,
        subcategoryId: 3,
        rateId: 4,
        conceptId: 2,
        amount: 6400
    }
]

let multipleChoiceAnswer
let m3Consumption
let invoiceAmount
let simulatorFlag = true
let finalMsg
let artifacts = []
let artifactTemplates = []
let invoiceDetails = []

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const round = (value, decimals) => Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)

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

const removeArtifact = (e) => {
    const node = e.target
    const dataId = node.getAttribute('data-id')
    artifacts.splice(dataId, 1)
    updateArtifactCounter()
}

const updateArtifactCounter = () => {
    const artifactCounterNode = document.querySelector('#artifactBadge')
    artifactCounterNode.innerHTML = artifacts.length
    const artifactAsideList = document.querySelector('#asideArtifactList')
    artifactAsideList.innerHTML = ''
    artifacts.forEach((artifact, i) => {
        const artifactAsideListItem = document.createElement('li')
        artifactAsideListItem.className = 'asideArtifactListItem'

        artifactAsideListItem.innerHTML =
            `
            <div class="asideArtifactListItemContent">
                ${artifact.artifactCapShownName()}
            </div>
            <div class="asideArtifactListItemContent">
                ${artifact.artifactKcalDesc}
            </div>
            <div class="asideArtifactListItemContent">
                ${artifact.artifactConsumption.toFixed(2)} m3
            </div>
            <div class="asideArtifactListItemContent">
                <a data-id="${i}" class="itemclosebtn">×</a>
            </div>
            `
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
    if (!isEmpty(nodeToDelete)) {
        nodeToDelete.remove()
    }

    const nodeToInsert = document.createElement('h2')
    nodeToInsert.innerHTML = `TOTAL: ${m3Consumption().toFixed(2)} m3`

    targetNode.append(nodeToInsert)
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

    switch (artifactTemplate.artifactName) {
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

    let artifact = new Artifact(artifactTemplate.artifactName, artifactKcalValue, artifactKcalDesc, dayQty, hourQty, hasPilot, peopleQty)

    artifacts.push(artifact)
    updateArtifactCounter()
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
            this.artifactAvailableKcalDesc = !isEmpty(artifactAvailableKcalDesc) ? artifactAvailableKcalDesc : ''
    }
}

class ArtifactTemplate {
    constructor(artifactName, askDays, askHours, askPilot, askPeople, artifactImg, artifactAvailableKcalValue, artifactAvailableKcalDesc) {
        this.artifactName = artifactName,
            this.artifactAvailableKcals = [],
            this.askDays = askDays,
            this.askHours = askHours,
            this.askPilot = askPilot,
            this.askPeople = askPeople,
            this.artifactImg = artifactImg
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
    artifactConfiguration = () => {
        const nodeToDelete = document.querySelector('#artifactConfigurator')
        if (!isEmpty(nodeToDelete)) {
            nodeToDelete.remove()
        }

        const nodeToInsert = document.createElement('div')
        nodeToInsert.className = 'artifactConfigurator'
        nodeToInsert.id = 'artifactConfigurator'

        nodeToInsert.innerHTML =
            `
            <h3>Configuración de ${this.artifactCapShownName()}</h3>
            <form class="artifactForm">
            </form>
            <button data-id= "${this.artifactName}" id="addArtifact" class="naturgyButton">Agregar</button>
            `

        const artifactSelectorNode = document.querySelector('#artifactSelector')
        artifactSelectorNode.append(nodeToInsert)

        const referenceNode = document.querySelector('.artifactForm')

        if (this.artifactAvailableKcals.length > 1) {
            createComboBox(referenceNode, 'artifactAvailableKcals', '¿Cual es su consumo en kcal/h?', this.artifactAvailableKcals, 'artifactAvailableKcalValue', 'artifactAvailableKcalDesc')
        }
        if (this.askDays) {
            createComboBox(referenceNode, 'askDays', '¿Cuantos días al mes los usas?', createNumericArray(1, 31))
        }
        if (this.askHours) {
            createComboBox(referenceNode, 'askHours', '¿Cuantos horas al día los usas?', createNumericArray(1, 24))
        }
        if (this.askPilot) {
            createComboBox(referenceNode, 'askPilot', '¿Posee piloto?', ['Si', 'No'])
        }
        if (this.askPeople) {
            createComboBox(referenceNode, 'askPeople', '¿Cuantos personas viven en el hogar?', createNumericArray(1, 15))
        }

        const addButton = document.querySelector('#addArtifact')
        addButton.addEventListener('click', addArtifact)
    }
}

const getListMsg = (array, display) => {
    let listMsg = ''
    array.forEach((element) => {
        listMsg += (array.indexOf(element) + 1) + ') ' + (isEmpty(display) ? element : capitalizeFirstLetter(element[display])) + '\n'
    })
    return listMsg
}

const openSide = () => {
    document.getElementById("asideBlockRight").style.width = "350px";
    document.getElementById("asideBlockLeft").style.marginRight = "350px";
}

const closeSide = () => {
    document.getElementById("asideBlockRight").style.width = "0";
    document.getElementById("asideBlockLeft").style.marginRight = "0";
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
    
    artifactTemplate = new ArtifactTemplate('horno', true, true, false, false, './img/horno.svg', 0.32)
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('hornalla', true, true, false, false, './img/cocina.svg', 0.15)
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('estufa', true, true, true, false, './img/calefactor.svg')
    artifactTemplate.addAvailableKcal(0.27, '2500 kcal/h')
    artifactTemplate.addAvailableKcal(0.32, '3000 kcal/h')
    artifactTemplate.addAvailableKcal(0.48, '4500 kcal/h')
    artifactTemplate.addAvailableKcal(0.65, '6000 kcal/h')
    artifactTemplate.addAvailableKcal(0.97, '9000 kcal/h')
    artifactTemplate.addAvailableKcal(1, '10000 kcal/h')
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('caldera', false, false, true, true, './img/caldera.svg')
    artifactTemplate.addAvailableKcal(2.15, '20000 kcal/h')
    artifactTemplate.addAvailableKcal(3.23, '30000 kcal/h')
    artifactTemplate.addAvailableKcal(4.3, '40000 kcal/h')
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('calefón', false, false, true, true, './img/calefon.svg', 1.13)
    artifactTemplates.push(artifactTemplate)
    artifactTemplate = new ArtifactTemplate('termotanque', false, false, false, true, './img/termotanque.svg', 0.35)
    artifactTemplates.push(artifactTemplate)

    nodeToDelete = document.querySelector('#m3ConsumptionInput')
    if (!isEmpty(nodeToDelete)) {
        nodeToDelete.remove()
    }

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

const m3ConsumptionInput = () => {
    let nodeToDelete

    const title = document.querySelector('#artifactSelectorTitle')
    title.innerHTML = 'Ingresá tu consumo bimestral promedio:'
    nodeToDelete = document.querySelector('#artifactSelectorList')
    if (!isEmpty(nodeToDelete)) {
        nodeToDelete.remove()
    }

    nodeToDelete = document.querySelector('#artifactConfigurator')
    if (!isEmpty(nodeToDelete)) {
        nodeToDelete.remove()
    }

    nodeToDelete = document.querySelector('#iconBadgeGroup')
    if (!isEmpty(nodeToDelete)) {
        nodeToDelete.remove()
    }

    closeSide()

    const nodeToInsert = document.createElement('div')
    nodeToInsert.className = 'm3ConsumptionInput'
    nodeToInsert.id = 'm3ConsumptionInput'

    nodeToInsert.innerHTML =
        `
        <input type="text" class="formInput" id="m3Input" placeholder="Consumo Bimestral (en m3)" required=""/>
        <label for="name" class="formLabel">Consumo Bimestral (en m3)</label>
        <button class="naturgyButton">Calcular</button>
        `

    const artifactSelectorNode = document.querySelector('#artifactSelector')
    artifactSelectorNode.append(nodeToInsert)
}

const getObjectArrayValuebyId = (array, id, key) => {
    return array.find((element) => element.id == id)[key];
}

class InvoiceDetail {
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
            return {
                taxId: taxes_accounting_concept.id,
                taxName: taxes_accounting_concept.name,
                taxAmount: round(taxes_accounting_concept.rate * this.subTotal, 2)
            }
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

    invoiceAmount = round(invoiceDetailsFilter.reduce((acum, invoiceDetail) => acum + invoiceDetail.total, 0), 2)

    return invoiceAmount
}

//START
const seleccionInicial = document.querySelector('#choice1')
if (seleccionInicial.checked) {
    artifactDesigner()
} else {
    m3ConsumptionInput()
}

const setToogleSelection = (e) => {
    const title = document.querySelector('#artifactSelectorTitle')
    if (e.target.id == 'choice1') {
        artifactDesigner()
    } else {
        m3ConsumptionInput()
    }
}

const toogleSelections = document.querySelectorAll('.toogleChoice')

toogleSelections.forEach((toogleSelection) => {
    toogleSelection.addEventListener('click', setToogleSelection)
})

const closeAside = document.querySelector('#closeAsideBlockRight')
closeAside.addEventListener('click', closeSide)