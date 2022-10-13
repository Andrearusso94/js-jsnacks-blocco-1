// in un array ci sono i nomi di invitati in una festa, chiedi all'utente il suo nome e comunicagli se può partecipare alla festa o no


const nameParty = ['andrea', 'anna', 'adriano', 'alessio'];

const myName = prompt("dimmi il tuo nome");
console.log(myName);
let isValid = false;

/*for (let i = 0; i < nameParty.length; i++ ){
    const element = nameParty[i];
    
if  ( myName === element ){
    isValid = true;
    console.log("goditi la festa")
   
} 
} console.log(isValid) 
*/

// while

let i = 0
while (i < nameParty.length){
    let element = nameParty[i];
    i++
    if (myName === element){
        isValid = true;
    
        console.log("goditi la festa")
    } 
}console.log(isValid)
