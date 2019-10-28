import React from 'react';
import socketIOClient from 'socket.io-client'
import BackHome from '../../components/PrinterInterface/back-home/back-home'
import Dpad from '../../components/PrinterInterface/dpad/dpad'
import UpDown from '../../components/PrinterInterface/up-down/up-down'
import UploadFile from '../../components/PrinterInterface/upload-file/upload-file'
import StartPrint from '../../components/PrinterInterface/start-print/start-print'
import PauseContinue from '../../components/PrinterInterface/pause-continue/pause-continue'
import './PrinterInterface.css'

function PrinterInterface({history}) {
  const socket = socketIOClient('http://127.0.0.1:25565');

  // socket.on('test', () => {
  //   console.log("test received!")
  // }) 

  return (
    <div className='grid-printer'>
      <BackHome gridElement='back-home' history={history}/>
      <div className='title'>3D Printer Interface</div>
      <div className='video-feed'></div>
      <Dpad gridElement='dpad' className='dpad' socket={socket}/>
      <UpDown gridElement='up-down' className='up-down'></UpDown>
      <UploadFile gridElement='upload-file' className='upload-file'></UploadFile>
      <div className='start-pause-continue-block'>
        <StartPrint gridElement='start-print' className='start-print'></StartPrint>
        <PauseContinue gridElement='pause-continue' className='pause-continue'></PauseContinue>
        {/* <StartPrint gridElement='start-print' className='start-print'></StartPrint> */}
      </div>
    </div>
  );
}

export default PrinterInterface;
