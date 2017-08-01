var socket = io();

socket.on('connect', function ()  {
  console.log('Connected to server');
  
  socket.emit('createMessage', {
    from: 'client@example.com',
    text: 'hope all is well'
  })

})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})


socket.on('newMessage', function (message) {
  console.log('newMessageServer :', message);
})
