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

// console.log(contaVocali('miao'));

//1* con forEach
const contaVocali = stringa => {
    const array = stringa.toLowerCase().split('');
    const vocali = "aeiou";

    let contatore = 0;
    for(let i = 0; i < array.length; i++) {
        const carattere = array[i];
        //se le tra vocali c'è questo carattere
        if (vocali.includes(carattere)){
            contatore++;
        }
    };
    return contatore;
}

console.log(contaVocali('miao'));