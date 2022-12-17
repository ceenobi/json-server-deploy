const jsonServer = require('json-server, ./node_modules/json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3500

server.use(middlewares)
server.use(router)

server.listen(port)
