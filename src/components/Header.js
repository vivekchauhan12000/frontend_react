import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"


function Header() {
  return (
    <Router>
    <div style={{background:"#0093E9",
backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
}}>
      <nav className="navbar navbar-expand-md navbar-light mb-4">
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:"white"}} href="/">Logo Name</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
       
        
        <li className="nav-item">
        <a style={{color:"white"}} className="nav-link active" aria-current="page" href="/Donorlist">Plasma Donor</a>
        </li>
       
        <li className="nav-item">
          <a style={{color:"white"}} className="nav-link active" aria-current="page" href="/DonorDetails">Donate Plasma</a>
        </li>

        <li className="nav-item">
          <a style={{color:"white"}} className="nav-link active" aria-current="page" href="/ContactUs">Contact Us</a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

    </div>
    </Router>
  )
}

export default Header
