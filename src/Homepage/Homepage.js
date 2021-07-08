import React from "react";
import "./Homepage.css";
const Homepage=()=>{
    return(
        <div class="main">
        <div class="navbar">
          <p>Get the latest on our COVID-19 response</p>
        </div>
  
        <div class="signIn">
          <div class="switch">
            <p>Switch to hosting</p>
            <i class="fas fa-globe"></i>
          </div>
          <div class="icon">
            <div class="lines">
              <div class="div"></div>
              <div class="div"></div>
              <div class="div"></div>
            </div>
            <div class="admin">
              <i class="fas fa-user"></i>
            </div>
          </div>
  
        </div>
  
        <p class="places-to-stay">Places to stay</p>
  
        <div class="middle">
          <div class="info">
            <h4>Location</h4>
            <p>where are you going?</p>
          </div>
          <div class="info">
            <h4>Check in</h4>
            <p>Adds dates</p>
          </div>
          <div class="info">
            <h4>Check out</h4>
            <p>Add dates</p>
          </div>
          <div class="info">
            <h4>Guests</h4>
            <p>Add guests</p>
          </div>
  
          <div class="searchIcon">
            <i class="fas fa-search"></i>
          </div>
        </div>
  
        <div class="go-near">
          <h1>
            Go<br />
            Near
          </h1>
          <p>Explore nearby stays</p>
        </div>
      </div>
    )
}

export default Homepage;