const io = require('socket.io')(25565)

io.on('connection', socket => {
  socket.on('test', () => {
    socket.broadcast.emit('test')
    console.log("test received")
  })
  socket.on('printerUser', (device) => {
    console.log('User connected from ' + device)
  })
  socket.on('printerMoveXY', (direction) => {
    socket.broadcast.emit('printerMoveXY', direction)
    console.log("XY direction: " + direction)
  })
  socket.on('printerMoveZ', (direction) => {
    socket.broadcast.emit('printerMoveZ', direction)
    console.log("Z direction: " + direction)
  })
  socket.on('printerPauseContinue', () => {
    socket.broadcast.emit('printerPauseContinue')
    console.log("Pause or Continue")
  })
  socket.on('printerStartPrint', (fileData) => {
    socket.broadcast.emit('printerStartPrint', fileData)
    console.log("Start Print")
  })
  socket.on('printerSendImage', (imageData) => {
    socket.broadcast.emit('printerReceiveImage', imageData)
    console.log("Send Image")
  })
})