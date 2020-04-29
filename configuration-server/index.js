const http = require('http')

const microConfigA = require('./microConfigA.json')
const microConfigB = require('./microConfigB.json')

const PORT = 8888

const chance = (p) => Math.random() <= p

http
  .createServer((req, res) => {
    const data = chance(0.5) ? microConfigA : microConfigB

    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')

    res.writeHead(200)
    res.end(JSON.stringify(data))
  })
  .listen(PORT, () => console.log('Config server started on: ', PORT))
