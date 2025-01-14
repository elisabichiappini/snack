console.log('ciao');
//import modulo .env
const dotenv = require("dotenv");
dotenv.config();


//import modulo server
const http = require("http");
const port = process.env.PORT || 'ciao port';
const host = process.env.HOST || 'ciao host';
http.createServer((res, req) => {
    res.end();
}).listen((port, host, () => {
    console.log(`server avviato su http://${host}:${port}`);
}));