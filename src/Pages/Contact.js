import React from 'react'
import Footer from "../components/Footer"
import Img from "../images/PLasmaDonation.jpg"


function Contact() {
  return (
    <div>
      <h2>Contact us for any help needed</h2>
      <div className="container row">

      <div className="card" style={{width: '18rem',margin:"10px"}}>
  <img className="card-img-top" src={Img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>

  <div className="card" style={{width: '18rem',margin:"10px"}}>
  <img className="card-img-top" src={Img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>

  </div>
      <Footer/>
    </div>
  )
}

export default Contact
