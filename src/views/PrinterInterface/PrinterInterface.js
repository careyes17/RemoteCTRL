import React from 'react';
import BackHome from '../../components/PrinterInterface/back-home/back-home'
import Dpad from '../../components/PrinterInterface/dpad/dpad'
import './PrinterInterface.css'

function PrinterInterface({history}) {
  return (
    <div className='grid-printer'>
      <BackHome gridElement='back-home' history={history}/>
      <div className='title'>3D Printer Interface</div>
      <div className='video-feed'></div>
      <Dpad gridElement='dpad' className='dpad'/>
      <div className='up-down'></div>
      <div className='upload-file'></div>
      <div className='pause-continue'></div>
    </div>
  );
}

export default PrinterInterface;
