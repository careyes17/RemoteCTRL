import React from 'react';
import Button from '@material-ui/core/Button';
import './magnet.css'

  export default function Magnet({gridElement, socket}) {

    function magnetToggle() {
      console.log("Magnet toggle")
      socket.emit('craneMagnet')
    }

    return (
      <Button variant="outlined" className={`${gridElement} magnet`} onClick={magnetToggle}>
        Magnet Toggle
      </Button>
    );
  }