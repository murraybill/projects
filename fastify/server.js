const Fastify = require('fastify')
const http = require('http');
const hosts = require("./public/hosts.json");

const proxy = Fastify({
  logger: true
})

proxy.register(require('@fastify/reply-from'), {
  base: 'http://localhost:8010'
})


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

proxy.get('/', (request, reply) => {

  if(shouldProxyRequest(request))
    reply.from('/')
  proxy.route()
    
})


proxy.listen({ port: 8888 }, (err) => {
  if (err) {
    throw err
  }
})

//Test Server
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied' + '\n\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(8010);