const io = require('socket.io')(8080)
const SerialPort = require('serialport')
const port = new SerialPort('../../../../dev/ttyACM0', { baudRate: 9600 })

var magnet_on = false

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
    port.write(`movingXY:${direction}\n`, (err) => {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
      magnet_on = false
    })	  
  })
  socket.on('craneMoveZ', (direction) => {
    socket.broadcast.emit('craneMoveZ', direction)
    console.log("Z direction: " + direction)
    port.write(`movingZ:${direction}\n`, (err) => {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
      magnet_on = false
    })	   
  })
  socket.on('craneMagnet', () => {
    socket.broadcast.emit('craneMagnet')
    console.log("Magnet toggle")
    if (magnet_on) {
    port.write('magnet:off\n', (err) => {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
      magnet_on = false
    })
   } else {
    port.write('magnet:on\n', (err) => {
      if (err) {
        return console.log('Error on write: ', err.message)
      }
      console.log('message written')
    })
    magnet_on = true
   }
  })
})
