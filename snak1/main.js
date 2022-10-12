// l'utente inserisce due numeri in successiione, con due promprt. il software stampa il maggiore

const nr1 = Number(prompt('Inserisci un numero'))


const nr2 = Number(prompt('Inserisci un numero'))

const finalWinner = true;

if (nr1 > nr2){
   let finalWinner = nr1;
   let myMessage = `Ciao questo è il numero vincente: ${finalWinner}`
   document.getElementById("winner_number").innerHTML = myMessage;
    console.log(finalWinner, "Numero 1 è il maggiore")
    
} else if (nr1 < nr2){
    let finalWinner = nr2
    let myMessage = `Ciao questo è il numero vincente: ${finalWinner}`
document.getElementById("winner_number").innerHTML = myMessage;
    console.log(finalWinner, "Numero 2 è il maggiore")
    
} else{
    let myMessage = `Ciao nessuno ha vinto: ${finalWinner}`
   document.getElementById("winner_number").innerHTML = myMessage;
    console.log("non ha vinto nessuno")
}


