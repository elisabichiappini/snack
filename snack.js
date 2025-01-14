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

const yesObject = ({name, age}) => {
    return `L'utente ${name} ha ${age} anni`;
}

console.log(yesObject({
    name: 'Elisa',
    age: 44
}));