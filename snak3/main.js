//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

/*const nr1 = Number(prompt('dammi un numero'))
const nr2 = Number(prompt('dammi un numero'))
const nr3 = Number(prompt('dammi un numero'))
const nr4 = Number(prompt('dammi un numero'))
const nr5 = Number(prompt('dammi un numero'))
const nr6 = Number(prompt('dammi un numero'))
const nr7 = Number(prompt('dammi un numero'))
const nr8 = Number(prompt('dammi un numero'))
const nr9 = Number(prompt('dammi un numero'))
const nr10 =Number(prompt('dammi un numero'))

console.log(nr1, nr2, nr3, nr4, nr5, nr6, nr7, nr8, nr9, nr10)

const somma = nr1 + nr2 + nr3 + nr4 + nr5 + nr6 + nr7 + nr8 + nr9 + nr10;
console.log(somma)*/
/*let sum = 0
for (let i = 0; i <= 9; i++){
    const nr = Number(prompt('dammi un numero'));
    sum +=  nr
    
    console.log(sum)*/
   // let somma = nr + nr + nr + nr + nr +nr + nr + nr + nr + nr
  //  console.log(somma)
//}

let sum = 0;
let i = 0;
while (i < 10) {
    let nr = Number(prompt('dammi un numero'));
    sum += nr

    i++
    console.log(sum)
}
