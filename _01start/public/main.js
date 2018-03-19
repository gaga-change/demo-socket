var socket = io()

$('#commitBtn').click(function () {
    var msg = $('#message').val()
    $('#message').val('')
    socket.emit('new message', msg)
    addMsg(msg)
})

socket.on('new message', function (msg) {
    addMsg(msg)
})

function addMsg(msg) {
    $('#contain').append($('<p></p>').text(msg))
}