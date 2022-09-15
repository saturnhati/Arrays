// rendere una stringa minuscola o maiuscola
let stringa = 'Ciao a tutti'
console.log(`La stringa base è: ${stringa}`)
let resultUp = stringa.toUpperCase()
console.log(`La stringa in maiuscolo è: ${resultUp}`)
let resultLo = stringa.toLowerCase()
console.log(`La stringa in minuscolo è: ${resultLo}`)

// separa la stringa in elementi a ogni spazio
let arrayFromString1 = stringa.split(" ")
console.log(arrayFromString1)

// separa la stringa in elementi a ogni carattere
let arrayFromString2 = stringa.split("")
console.log(arrayFromString2)

// separa la stringa in elementi a ogni "a"
let arrayFromString3 = stringa.split("a")
console.log(arrayFromString3)

// seleziona e mostra solo due elementi dell'array
console.log(`${arrayFromString1[0]} ${arrayFromString1[2]}`)

// crea un array di nomi
let lotrComp = ['Frodo', 'Sam', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli', 'Boromir', 'Merry', 'Pippin']

// leggi il terzo elemento (2 perché gli array partono da 0)
console.log(`Il terzo elemento è ${lotrComp[2]}`)

// passa all'array un valore tramite una variabile e leggi la lunghezza dell'array
console.log(`Questo array contiene ${lotrComp.length} elementi`)
lotrComp[9] = 'Gollum'
console.log(`Questo array contiene ${lotrComp.length} elementi`)

//crea una funzione all'interno della quale utilizzerai i valori numerici tratti da un array
let grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let randomGrades = grades[Math.floor(Math.random()* 10)]
console.log(`Il tuo voto è ${randomGrades}`)

// metodi push/pop e shift/unshift
let listaSpesa = ['latte', 'uova', 'burro']
console.log(listaSpesa)

// con push e pop aggiungo o elimino l'ultimo elemento dell'array
console.log(`La mia lista è ${listaSpesa}`)
listaSpesa.push('farina', 'olio')
console.log(`La mia lista con due elementi aggiunti alla fine è: ${listaSpesa}`)
listaSpesa.pop()
listaSpesa.pop()
console.log(`La mia lista con due elementi rimossi alla fine è: ${listaSpesa}`)

// con unshift e shift aggiungo o elimino il primo elemento dell'array
listaSpesa.unshift('farina', 'olio')
console.log(`La mia lista con due elementi aggiunti all'inizio: ${listaSpesa}`)
listaSpesa.shift()
listaSpesa.shift()
console.log(`La mia lista con due elementi rimossi all'inizio è: ${listaSpesa}`)