import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import Axios from "axios"
 
const url="http://localhost:8080/api/Donor"

function DonorForm() {
  let history = useHistory();
  
  const[data,setData]=useState({
    name:"",
    email:"",
    phone:"",
    city:"",
    address:"",
    bloodType:"",
    covidStatus:"",
    hadCovid:""
  });
  const handleOnSubmit=(e)=>{
    
    const newData={...data}
    newData[e.target.id]=e.target.value
    setData(newData);
    console.log(newData);
  }

  const onsubmit=(e)=>{
    e.preventDefault();
    Axios.post(url,{
     name:data.name,
     location:data.city,
     address:data.address,
     phone:data.phone,
     email:data.email,
     bloodType:data.bloodType,
     covidStatus:data.covidStatus,
     hadCovid:data.hadCovid
    }).then(res=>{
      console.log(res.data);
    });
    setData({ name:"",
    email:"",
    phone:"",
    city:"",
    address:"",
    bloodType:"",
    covidStatus:"",
    hadCovid:""})
    history.push('/')
  }
  return (
    <div className="container">
      <form>
        <h2>Donor Form</h2>
  <div className="mb-3">
   <h5>Email</h5>
    <input type="email" onChange={(e)=>handleOnSubmit(e)} value={data.email} className="form-control" id="email"/>
   
  </div>
  <div className="mb-3">
   <h5>Name</h5>
    <input type="text" onChange={(e)=>handleOnSubmit(e)} value={data.name} className="form-control" id="name"/>
  </div>
 
  <div className="mb-3">
   <h5>Number</h5>
    <input type="number" onChange={(e)=>handleOnSubmit(e)} value={data.phone} className="form-control" id="phone"/>
  </div>

  <div className="mb-3">
  <h5>City</h5>
    <input type="text" onChange={(e)=>handleOnSubmit(e)}  value={data.city} className="form-control" id="city"/>
  </div>

  <div className="mb-3">
  <h5>address</h5>
    <input type="text" onChange={(e)=>handleOnSubmit(e)}  value={data.address} className="form-control" id="address"/>
  </div>

  <div className="input-group mb-3">
  <label class="input-group-text">Blood Group</label>
  <select class="form-select" id="bloodType" required onChange={(e)=>handleOnSubmit(e)} value={data.bloodType}>
    <option selected>Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
   
  </select>
  </div>

  <div class="input-group mb-3">
  <label class="input-group-text">covidStatus</label>
  <select class="form-select" id="covidStatus" required onChange={(e)=>handleOnSubmit(e)} value={data.covidStatus}>
    <option selected>covidStatus</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
   
  </select>
</div>

  

  <div class="input-group mb-3">
  <label class="input-group-text">Had covid</label>
  <select class="form-select" id="hadCovid" required onChange={(e)=>handleOnSubmit(e)} value={data.hadCovid}>
    <option selected>had covid in past</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
   
  </select>
</div>

  <button type="submit" className="btn btn-primary" onClick={onsubmit}>Submit</button>
</form>


    </div>
  )
}

export default DonorForm
