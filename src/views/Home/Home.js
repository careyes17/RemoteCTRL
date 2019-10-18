import React from 'react';
import Card from '../../components/Home/Card/card'
import './Home.css'

function Home() {
  return (
    <div className='grid'>
      <Card test='•' gridElement='printer'/>
      <Card test='•' gridElement='crane'/>
    </div>
  );
}

export default Home;
