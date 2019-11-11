import React from 'react';
import socketIOClient from 'socket.io-client'
import BackHome from '../../components/Crane/back-home/back-home'
import LeftRight from '../../components/Crane/left-right/left-right'
import UpDown from '../../components/Crane/up-down/up-down'
import Magnet from '../../components/Crane/magnet/magnet'
import PlaceholderIcon from '../../components/Crane/placeholder-icon/placeholder-icon'
import './Crane.css'

function Crane({history}) {

  const socket = socketIOClient('http://127.0.0.1:25565', {
    reconnection: false
  });

  /************************************** Add to server */
  socket.emit('craneUser', 'web')

  // socket.on('test', () => {
  //   console.log("test received!")
  // }) 

  return (
    <div className='grid-crane'>
      <BackHome gridElement='back-home' history={history}/>
      <div className='title'>Crane Game</div>
      <PlaceholderIcon gridElement='placeholder-icon' className='placeholder-icon'/>
      <LeftRight gridElement='left-right' className='left-right' socket={socket}/>
      <UpDown gridElement='up-down' className='up-down' socket={socket}/>
      <Magnet gridElement='magnet' className='magnet' socket={socket}/>
    </div>
  );
}

export default Crane;
