import React from 'react'
import Popup from 'reactjs-popup';
function ListCard(props) {
  return (
    <div className="container" style={{margin:"5px",padding:"4px",color:"#f0ebcc"}}>
      <div className="card" style={{height:"180px",width:"80%",backgroundColor:"#3d84b8",borderRadius:"8px"}}>
     <div className="card-body">
    <h4 className="card-title list-group-item" style={{color:"#344fa1",borderRadius:"6px"}}>{props.name}</h4>
    <div style={{display:"flex",
  flexDirection:"row"}}>
    <h5 className="text-center">City:{props.loc}</h5>
    
    <h6 className="text-right" style={{flexGrow:"8"}} >blood Group {props.blood}</h6>
   
    </div>
    
    <Popup trigger={<button className="btn btn-primary">Contact Donor»</button>} position="right center">
    <div className="card" style={{padding:"2px",color:"#344fa1",borderRadius:"6px",backgroundColor:"#f0ebcc"}}><h5>contact: {props.contact}</h5></div>
  </Popup>
     </div>
     </div>
    </div>
  )
}

export default ListCard
