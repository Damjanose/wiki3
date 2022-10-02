import React from "react";
import '../style/welcome.css'
import wikipedia from '../images/wikipedia.png'


export default function Welcome() {

  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-description">The Free Encyclopedia</p>
        <div className="welcome--image_container">
          <img src={wikipedia} alt='wikipedia' className="welcome-image"/>
        </div>
      </div>
    </div>
  )
}
