import React from 'react'
import {useHistory} from "react-router-dom"

function RegiTab() {
  let history = useHistory();
 const redirect=()=>{
  
  history.push('/DonorDetails');
 }
  return (
    <div className="container">
       
      
      <div className="bg-light p-5 rounded">
        <h1>Register</h1>
        <p className="lead">Your Plasma donation can save someone life</p>
       
        
        <button className="btn btn-lg btn-danger" onClick={redirect}>Register as Donor»</button>
      </div>
    
    
        
    </div>
  )
}

export default RegiTab
