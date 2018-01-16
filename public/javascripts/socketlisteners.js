var socket = io();


//on connect event listener
socket.on('connect', function() {
  console.log(`this player${socket.id}`);
})

socket.on('reconnect', function(socket) {
  socket.emit('reconnect', socket.id)
  console.log(socket.id);
})

socket.on('setPlayer', function(socket) {
  socket.emit('setPlayer', socket)
})


// socket.on('connection', function(response) {
//   console.log(response);
// })
