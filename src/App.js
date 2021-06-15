import React from 'react'
import './App.css';
import Card from './Card'
import Cardinfo from './Cardinfo'

function App() {
  return (
    <>

<h1 className='headingStyle'> Top 5 Shows to Watch on Netflix 2021</h1>
<div className="mainContainer">
{ Cardinfo.map((currvalue)=>{
  return (
    <Card 
      key={currvalue.key}
     imgsrc={currvalue.imgsrc}
    heading={currvalue.heading}
    title={currvalue.title}
    link={currvalue.link}
    />
  )
})}      
</div>
</> 
  );
}

export default App;
