import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import './up-down.css'

  export default function UpDown({gridElement, socket}) {

    const direction = {
      UP: 'up',
      DOWN: 'down',
    };

    function moveHeadUp() {
      console.log(direction.UP);
      socket.emit('printerMoveZ', direction.UP);
    }
  
    function moveHeadDown() {
      console.log(direction.DOWN);
      socket.emit('printerMoveZ', direction.DOWN);
    }
  
    return (
    <div className={`${gridElement}`}>
        <div className={`updown-grid`}>
            <ArrowUpwardIcon className='up' fontSize='large' onClick={moveHeadUp}></ArrowUpwardIcon>
            <ArrowDownwardIcon className='down' fontSize='large' onClick={moveHeadDown}></ArrowDownwardIcon>
            <RemoveIcon className='center' fontSize='large'></RemoveIcon>
        </div>
    </div>    
    );
  }