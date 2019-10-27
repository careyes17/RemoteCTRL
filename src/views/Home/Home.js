import React from 'react';
import Card from '../../components/Home/Card/card'
import './Home.css'

function Home({history}) {
  return (
    <div className='grid'>
      <Card page='3D Printer Interface' gridElement='printer' history={history}/>
      <Card page='Crane Game' gridElement='crane' history={history}/>
    </div>
  );
}

export default Home;
