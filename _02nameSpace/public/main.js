var socket = io()

var chat = io.connect('http://localhost:3001/chat')
var news = io.connect('http://localhost:3001/news')

chat.on('connect', function() {
    chat.emit('hi!')
})

chat.on('a message', function(data) {
    console.log(data)
})

news.on('item', function(data) {
    console.log(data)
})
