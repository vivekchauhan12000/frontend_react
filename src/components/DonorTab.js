import React from 'react'
import {useHistory} from "react-router-dom"

function DonorTab() {

  let history = useHistory();
 const redirect=()=>{
  
  history.push('/Donorlist');
 }
  return (
    <div className="container">
      
  <div className="bg-light p-5 rounded">
    <h1>Plasma Donor</h1>
    <p className="lead">Seach for donor near you location and contact it by given detail.Please register your Patient by filling the form given in link</p>
    <button className="btn btn-lg btn-primary" onClick={redirect}>Search For Donor »</button>
  </div>


    </div>
  )
}

export default DonorTab
