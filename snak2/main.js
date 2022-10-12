//l'utente inserisce due parole in succession, con due promprt. il software stampa la parola più corta, poi la più lunga

const name1 = prompt('Dimmi il tuo nome');
const name2= prompt('Dimmi il tuo nome');
console.log(name1, name2)



if (name1.length < name2.length) {
    
    let myMessage = `Ciao questo è il nome più corto: ${name1}`
    document.getElementById("name").innerHTML = myMessage;
    console.log(name1, name2)
} else {
    
    let myMessage = `Ciao questo è il nome più corto: ${name2}`
    document.getElementById("name").innerHTML = myMessage;
    console.log(name2, name1)
}

