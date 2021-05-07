import React from 'react'

import DonorTab from "../components/DonorTab"
import Regist from "../components/RegiTab"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="container">
    <div className="container row justify-content-center">
     <div className="col"><DonorTab/></div> 
     <div className="col"><Regist/></div>
    
    </div>
     <Footer/>
    </div>
  )
}

export default Home
