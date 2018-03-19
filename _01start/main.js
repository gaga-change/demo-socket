const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.use('/', express.static(path.resolve(__dirname, 'public')))

io.on('connection', socket => {
    console.log('a user connect')
    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

server.listen(3000, () => {
    console.log(3000)
})