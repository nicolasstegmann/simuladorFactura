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

const rateTypes = [{
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

const accountingConcepts = [{
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
