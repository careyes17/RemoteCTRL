import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddIcon from '@material-ui/icons/Add';
import './dpad.css'

  function moveHeadUp() {
    console.log('up');
  }

  function moveHeadDown() {
    console.log('down');
  }

  function moveHeadLeft() {
    console.log('left');
  }
  
  function moveHeadRight() {
    console.log('right');
  }

  export default function Dpad({gridElement}) {
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