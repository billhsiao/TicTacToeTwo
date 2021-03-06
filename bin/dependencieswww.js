//io event listener module that
// * listens for new connections to server
// * logs them out
// * deletes old connections & logs them out as well

//ideas: maybe list history can be persisted somewhere? not sure

const connectedClients = {};
const connectionLog = {};
const roomList = [];
const player = {
  one: null,
  two: null
}
//object that lives on server as the single point of source for clients
const connectionController = {
  onConnect
}

function onConnect(io) {
    //takes io as argument so that it may be required as a dependecy without having to also include any other dependencies in this dependency
    io.on('connection', function(socket) {

        connectedClients[socket.id] = [Object.values(connectedClients).length, 'live'];
        console.log(`player ${connectedClients[socket.id][0]} connected`, connectedClients[socket.id][0], connectedClients[socket.id], socket.id);
        socket.on('disconnect', function() {
        connectedClients[socket.id] = [connectedClients[socket.id][0], 'n/a']
        console.log(`player ${connectedClients[socket.id][0]} disconnected`, connectedClients[socket.id], socket.id);
        })
        if (player.one === null) {
          player.one = socket.id
        } else if (player.one !== null && player.two === null) {
          player.two = socket.id
        } else {

        }

      // var nsp = io.of(`/${socket.id}`)
      // nsp.on('connection', function(socket) {
      //   console.log('someone connected');
      // });
      // nsp.emit('hi', 'everyone')
      //defines client object properties with clientID:[index, state]
      // connectedClients[socket.id] = [Object.values(connectedClients).length, 'live'];
      // console.log(`player ${connectedClients[socket.id][0]} connected`, connectedClients[socket.id][0], connectedClients[socket.id], socket.id);
      // socket.on('disconnect', function() {
      // connectedClients[socket.id] = [connectedClients[socket.id][0], 'n/a']
      // console.log(`player ${connectedClients[socket.id][0]} disconnected`, connectedClients[socket.id], socket.id);
      // })
      io.on('reconnect', function(socket) {
        console.log(socket.id);
      })
      io.on('setPlayer', function(socket) {
        console.log(socket);
      })
  })
  return
}

exports = module.exports = connectionController
