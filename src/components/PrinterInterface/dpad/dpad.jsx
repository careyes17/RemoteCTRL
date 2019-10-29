import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';
import './dpad.css'

  export default function Dpad({gridElement, socket}) {

    const direction = {
      UP: 'up',
      DOWN: 'down',
      LEFT: 'left',
      RIGHT: 'right',
    };

    function moveHeadUp() {
      console.log(direction.UP)
      //socket.emit('printerMoveXY', direction.UP);
    }
  
    function moveHeadDown() {
      console.log(direction.DOWN);
      //socket.emit('printerMoveXY', direction.DOWN);
    }
  
    function moveHeadLeft() {
      console.log(direction.LEFT);
      //socket.emit('printerMoveXY', direction.LEFT);
    }
    
    function moveHeadRight() {
      console.log(direction.RIGHT);
      //socket.emit('printerMoveXY', direction.RIGHT);
    }

    return (
    <div className={`${gridElement}`}>
        <div className={`dpad-grid`}>
            <ArrowUpwardIcon className='up' fontSize='large' onClick={moveHeadUp}></ArrowUpwardIcon>
            <ArrowDownwardIcon className='down' fontSize='large' onClick={moveHeadDown}></ArrowDownwardIcon>
            <ArrowBackIcon className='left' fontSize='large' onClick={moveHeadLeft}></ArrowBackIcon>
            <ArrowForwardIcon className='right' fontSize='large' onClick={moveHeadRight}></ArrowForwardIcon>
            <AddIcon className='center' fontSize='large'></AddIcon>
        </div>
    </div>    
    );
  }