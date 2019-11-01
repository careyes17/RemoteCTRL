import React from 'react';
import Button from '@material-ui/core/Button';
import './pause-continue.css'

  export default function PauseContinue({gridElement, socket}) {

    function pauseContinue() {
      console.log("pause/continue")
      socket.emit('printerPauseContinue')
    }

    return (
      <Button variant="outlined" className={`${gridElement} button-pause-continue`} onClick={pauseContinue}>
        Pause/Continue
      </Button>
    );
  }