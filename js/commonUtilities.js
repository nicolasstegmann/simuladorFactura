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

const naturgyToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    iconColor: '#e57200',
    color: '#004571',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const firtTimeIntro = () => {
    const firstTime = localStorage.getItem('firstTime') || 'Y'
    if (firstTime == 'Y') {
        localStorage.setItem('firstTime', 'N')
        introJs().setOptions({
            tooltipClass: 'naturgyTooltip',
            disableInteraction: true,
            exitOnOverlayClick: false,
            showStepNumbers: true,
            steps: [{
                    title:
                        `
                        <div>
                        <img src="../img/gasnorLogo.png" alt="Gasnor S.A." style="width:150px;">
                        <h2>Bienvenido al simulador de facturas</h2>
                        </div>
                        `,
                    intro: '¡Con este simulador podrás calcular tus facturas en base a los artefactos que tengas en tu hogar o en base a un consumo que conozcas!'
                },
                {
                    title: 'Selección de modo',
                    element: document.querySelector('.togglerContainer'),
                    intro: 'Selecciona acá si prefieres elegir los artefactos de tu hogar o simplemente indicar un consumo en metros cúbicos.'
                },
                {
                    title: 'Configuración de artefactos',
                    element: document.querySelector('#artifactSelectorList'),
                    intro: 'En el "Modo Artefacto", selecciona, configura y agrega uno a uno los artefactos que posees en tu hogar.'
                },
                {
                    title: 'Contador y lista de artefactos',
                    element: document.querySelector('#iconBadgeGroup'),
                    intro: 'Haciendo click acá, podrás ver y eliminar los artefactos que ya hayas agregado a la lista de tu hogar.'
                },
                {
                    title: 'Configuración de factura',
                    element: document.querySelector('#invoiceFilter'),
                    intro: 'En este panel de filtros, podrás seleccionar la configuración de tu factura según tu locación y tipo de usuario.'
                },
                {
                    title: 'Detalle de factura',
                    element: document.querySelector('#invoiceDetail'),
                    intro: 'En esta sección conocerás el detalle de cada uno de los conceptos calculados según tu consumo que serán parte de tu factura.'
                },
                {
                    title: 'Detalle de factura',
                    element: document.querySelector('#invoiceChart'),
                    intro: 'Y finalmente en este panel podrás comparar el total de factura para cada tarifario.'
                }
            ]
        }).start()
    }
}
