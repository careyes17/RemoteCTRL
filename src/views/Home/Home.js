import React from 'react';
import Card from '../../components/Home/Card/card'
import './Home.css'

function Home() {
  return (
    <div className='center'>
      <Card className='printer' test='•'/>
      <Card className='crane' test='•'/>
    </div>
  );
}

export default Home;
