import React from 'react';
import Button from '@material-ui/core/Button';
import './start-print.css'

  export default function StartPrint({gridElement, socket}) {

    function startPrint() {
      console.log("start print")
      const fileData = ''
      socket.emit('printerStartPrint', fileData)
    }

    return (
      <Button variant="outlined" className={`${gridElement} button-print`} onClick={startPrint}>
        Start Print
      </Button>
    );
  }