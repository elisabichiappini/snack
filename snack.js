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
})