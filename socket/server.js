const io = require('socket.io')(25565)

io.on('connection', socket => {
  socket.on('test', () => {
    socket.broadcast.emit('test')
    console.log("test received")
  })

  // Printer listeners
  socket.on('printerUser', (device) => {
    console.log('Printer user connected from ' + device)
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

  // Crane listeners
  socket.on('craneUser', (device) => {
    console.log('Crane user connected from ' + device)
  })
  socket.on('craneMoveXY', (direction) => {
    socket.broadcast.emit('craneMoveXY', direction)
    console.log("XY direction: " + direction)
  })
  socket.on('craneMoveZ', (direction) => {
    socket.broadcast.emit('craneMoveZ', direction)
    console.log("Z direction: " + direction)
  })
  socket.on('craneMagnet', () => {
    socket.broadcast.emit('craneMagnet')
    console.log("Magnet toggle")
  })
})