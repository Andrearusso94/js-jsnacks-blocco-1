// l'utente inserisce due numeri in successiione, con due promprt. il software stampa il maggiore

const nr1 = Number(prompt('Inserisci un numero'))


const nr2 = Number(prompt('Inserisci un numero'))

if (nr1 > nr2){
    console.log(nr1, "Numero 1 è il maggiore")
} else if (nr1 < nr2){
    console.log(nr2, "Numero 2 è il maggiore")
} else{
    console.log("non ha vinto nessuno")
}