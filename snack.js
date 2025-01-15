console.log('ciao');
//import modulo .env
const dotenv = require("dotenv");
dotenv.config();


//import modulo server
const http = require("http");
const port = process.env.PORT || 8889;
const host = process.env.HOST || localhost;
http.createServer((req, res,) => {
    res.writeHead(200, {
        "Content-type":"text/html; charset=utf-8"
    });
    res.end('<h1>ciao sono collegato</h1>');
}).listen(port, host, () => {
    console.log(`server avviato su http://${host}:${port}`);
});


//1.Creare una funzione che data una stringa, conti le vocali al suo interno e ne ritorni il numero
// const contaVocali = stringa => {
//     stringa = stringa.toLowerCase();
//     const vocali = "aeiou";

//     let contatore = 0;
//     for(let i = 0; i < stringa.length; i++) {
//         const carattere = stringa[i];
//         //se le tra vocali c'è questo carattere
//         if (vocali.includes(carattere)){
//             contatore++;
//         }
//     };
//     return contatore;
// }

// console.log(contaVocali('collega'));


//2.Creare un arrow function per invertire una stringa. dovrai scrivere una funzione che prenda una stringa come argomento e restituisca la stringa con i caratteri in ordine inverso
//abbiamo solo un dato quindi togliamo le due ()
// const reverseString = stringa => {
//     //converto la stringa in array, lo splitto e poi reverso e poi trasformo di nuovo in una stringa
//     return stringa.split('').reverse().join('');
// }

// console.log(reverseString('comestai'));

//3.Uso del destructuring: scrivi un arrow function che accetti un oggetto come argomento, il quale avr´al suo interno la proprietà name and age e tramite il destructuring concatenare queste due proprietà in una stringa; L'utente ${name} ha ${age} anni.

// const yesObject = ({name, age}) => {
//     return `L'utente ${name} ha ${age} anni`;
// }

// console.log(yesObject({
//     name: 'Elisa',
//     age: 44
// }));

//4:uso destructuring, dato un oggetto complesso, composto da array e oggetti, creare una funzione che restituisca un nuovo oggetto con i valori: **model**, **city**, **registration.city**, **owners[0]** e **owners[1]**
// aggiungere una proprietà `text` dove creare la stringa `l'auto mustang è stata acquistata prima da Mario Rossi e poi da Giuseppe Verdi a Milano`

// const veicolo = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021,
//     color: 'red',
//     owners: [
//         "Mario Rossi",
//         'Giuseppe Verdi'
//     ],
//     registration: {
//         city: 'Budapest',
//         state: 'Budapest',
//         country: 'Italy'
//     }
// }

// const parseVeicolo = ({model, registration: {city}, owners: [firstOwner, secondOwner] }) => {
//     return {
//         model,
//         city,
//         firstOwner,
//         secondOwner,
//         text: `l'auto ${model} è stata acquistata prima da ${firstOwner} e poi da ${secondOwner} a ${city}`
//     }
// }

// console.log(parseVeicolo(veicolo));

//5. Uso spread operator: scrivi un arrow function che accetti 2 array come argomenti, il return della funzione dovrà essere un unico array composto dalla fusione dei due ricevuti come argomento

const obj1 = ['ciao', 'elisa'];
const obj2 = ['sono', 'stanca'];
const mergeArray = (arr1, arr2) => {
    const objMain = [...arr1, ...arr2];
    return objMain;
}
console.log(mergeArray(obj1,obj2));