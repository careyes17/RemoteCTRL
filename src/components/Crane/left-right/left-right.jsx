import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RemoveIcon from '@material-ui/icons/Remove';
import './left-right.css'

  export default function LeftRight({gridElement, socket}) {

    const direction = {
      LEFT: 'left',
      RIGHT: 'right',
    };

    function moveHeadLeft() {
      console.log(direction.LEFT);
      socket.emit('craneMoveXY', direction.LEFT);
    }
    
    function moveHeadRight() {
      console.log(direction.RIGHT);
      socket.emit('craneMoveXY', direction.RIGHT);
    }

    function moveStop() {
      console.log("Stopping Movement...");
      socket.emit('craneMoveXY', 'stop');
    }

    return (
    <div className={`${gridElement}`}>
        <div className={`left-right-grid`}>
            <ArrowBackIcon className='left' fontSize='large' onClick={moveHeadLeft}></ArrowBackIcon>
            <ArrowForwardIcon className='right' fontSize='large' onClick={moveHeadRight}></ArrowForwardIcon>
            <RemoveIcon className='center-left-right' fontSize='large' onClick={moveStop}></RemoveIcon>
        </div>
    </div>    
    );
  }