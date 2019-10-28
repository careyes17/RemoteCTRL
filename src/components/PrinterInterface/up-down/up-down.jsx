import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RemoveIcon from '@material-ui/icons/Remove';
import './up-down.css'

  function moveHeadUp() {
    console.log('up');
  }

  function moveHeadDown() {
    console.log('down');
  }

  export default function UpDown({gridElement}) {
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