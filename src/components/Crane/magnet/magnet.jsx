import React from 'react';
import Button from '@material-ui/core/Button';
import './magnet.css'

  export default function Magnet({gridElement, socket}) {

    function pauseContinue() {
      console.log("pause/continue")
      socket.emit('printerPauseContinue')
    }

    return (
      <Button variant="outlined" className={`${gridElement} magnet`} onClick={pauseContinue}>
        Magnet
      </Button>
    );
  }