const hosts = require("./public/hosts.json");

const http = require('http');
const https = require('https');
const httpProxy = require('http-proxy');


const PROXY_PORT = 8888;
const TARGET_PORT = 8010;
const TARGET_URL = "http://localhost:8010";
const isTestMode = true;

//http=127.0.0.1:80;https=127.0.0.1:443
// Define your custom logic to determine which requests to proxy
const shouldProxyRequest = (req) => {

    const requestedHOST = req.headers.host;
    console.log("Requested HOST:" + requestedHOST);
    //console.log(hosts)
    let hostsAsString = JSON.stringify(hosts);
    //console.log(hostsAsString)
    if (hostsAsString.includes(requestedHOST)) {
        console.log("found host:" + requestedHOST);
        return true;
    }
    return false;
};


let proxy = httpProxy.createProxyServer({});


let httpServer = http.createServer((req, res) => {
    
    if (shouldProxyRequest(req))
        proxy.web(req, res, { target: TARGET_URL });
    else 
        proxy.web(req, res, { target: req.url });
    /*
    else {
        console.log("pass through: " + req.url);
        const optionsPass = {
            host: req.headers.host, // Replace with the target host
            port: req.headers.port, // Default HTTPS port
            path: req.headers.path, // Replace with the specific API path
            method: req.method, // HTTP method (GET, POST, etc.)           
        };



        let receivedData = Buffer.alloc(0);

        const reqNew = http.request(optionsPass, (resNew) => {
            console.log('Response status code:', resNew.statusCode);
            // Handle the response data here
            resNew.on('data', (chunk) => {
                receivedData = Buffer.concat([receivedData, chunk]);
                console.log('Received data:', chunk.toString());

            });

            resNew.on('end', () => {
                // Now 'receivedData' contains the complete data
                // Send it back to the client or perform further processing
                //console.log('Complete data received:', receivedData.toString('utf-8'));
                res.writeHead(200,{ 'Content-Type': 'text/plain' });             
                res.write(receivedData.toString('utf-8'));

            });
        });

        reqNew.on('error', (error) => {
            console.error('Error making request:', error);
        });
        // Send the request
        reqNew.end();

    }*/



});

console.log("http proxy listening on port:" + PROXY_PORT)
httpServer.listen(PROXY_PORT);

let httpsServer = https.createServer((req, res) => {

    console.log("443");
    
    //proxy.web(req, res, { target: req.url });
    


});

console.log("https proxy listening on port:" + 443)
httpsServer.listen(443);



//Test Server
if (isTestMode) {
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('request successfully proxied to: ' + TARGET_URL + '\n' + JSON.stringify(req.headers, true, 2));
        res.end();
    }).listen(TARGET_PORT);
}


