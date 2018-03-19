const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

app.use('/', express.static(path.resolve(__dirname, 'public')))

const chat = io.of('/chat')
    .on('connection', socket => {
        // 只推送给自己
        socket.emit('a message', {
            that: 'only',
            '/chat': 'will get'
        })
        // 推送给命名空间内所有人
        chat.emit('a message', {
            everyone: 'in',
            '/chat': 'will get'
        })
    })
const news = io.of('/news')
    .on('connection', socket => {
        socket.emit('item', { new: 'item' })
    })
server.listen(3001, () => {
    console.log(3001)
})