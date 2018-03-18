const express = require('express')
const socketIo = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const io = socketIo(http.Server(app))

app.use('/', express.static(path.resolve(__dirname, 'public')))

io.on('connection', socket => {
    console.log('a user connect')
    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
})

app.listen(3000, () => {
    console.log(3000)
})


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
    