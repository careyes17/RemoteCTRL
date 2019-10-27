import React from 'react';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import './dpad.css'

  export default function Dpad({gridElement}) {
    return (
    <div className={`${gridElement}`}>
        <div className={`dpad-grid`}>
            {/* <GamesOutlinedIcon className={`dpad-icon`}/> */}
            <div className='red'>5</div>
            <div className='blue'>6</div>
            <div className='red'>7</div>
            <div className='blue'>8</div>
        </div>
    </div>    
    );
  }