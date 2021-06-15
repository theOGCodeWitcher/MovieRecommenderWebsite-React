import React from 'react'

function Card(props) {
  return (<>
    
      <div className="container">
        <div className="image">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="content">
          <div className="heading"><h1>{props.heading}</h1></div>
          <h2>{props.title}</h2>
          <div className="btnClass"><a href={props.link}>
            <button className='btn'>Watch Now</button>
          </a></div>
        </div>
      </div>
    
  </>)
}

export default Card