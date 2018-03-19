const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.use('/', express.static(path.resolve(__dirname, 'public')))

io.on('connection', socket => {
    socket.on('new message', (data) => {
        socket.broadcast.emit('new message', data)
    })
    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

server.listen(3001, () => {
    console.log(3001)
})