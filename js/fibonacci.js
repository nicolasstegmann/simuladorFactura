/*
Este bloque de código muestra los n primeros elementos de la serie de fibonacci.
Y al final, cuenta cuantos de ellos son pares y cuantos son impares.

Esto se repite hasta que el usuario indique que no quiere continuar
*/
const welcomeMsg = 'La serie de Fibonacci es la siguiente sucesión infinita de números naturales donde cada término es la suma de los dos anteriores. ¡Vamos a descubrirla!'

const upperBound = 100

let userContinue
let lastTerm, newTerm, term
let evenQty 
let oddQty 

console.log(welcomeMsg)

while(userContinue = confirm('¿Deseas generar una serie de Fibonacci?')) {
    evenQty = 0
    oddQty = 0
    console.clear()
    console.log(welcomeMsg)    
    let termQty = prompt('Ingresá la cantidad de términos que deseas generar. El máximo permitido es ' + upperBound + '.')
    if (termQty > 0 && termQty <= upperBound && !isNaN(termQty)) {
        lastTerm = 0
        newTerm = 1
        for(let i = 0; i < termQty; i++){
            if (i == 0) {
                term = lastTerm
            } else if (i == 1) {
                term = newTerm
            } else {
                term = lastTerm + newTerm
                lastTerm = newTerm
                newTerm = term
            }
            console.log('Término #' + (i + 1) +  ': ' + term)

            if (term % 2 == 0){
                evenQty++
            } else {
                oddQty++
            }
        }
        console.log(evenQty + ' términos son pares.')
        console.log(oddQty + ' términos son impares.')
    } else {
        alert('El número de términos ingresado debe ser mayor a cero y menor o igual a ' + upperBound + '.')
    }
}

