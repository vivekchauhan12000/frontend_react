import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import Axios from "axios"
import Popup from 'reactjs-popup';
 
const url="http://localhost:8080/api/Patient"

function PatientForm() {

  let history = useHistory();
   //login logic

  const[login,setlogin]=useState("");
  const [islogin,setis]=useState("false");

  const handleOnLogin=(e)=>{
     const newLogin=e.target.value
    setlogin(newLogin);
    console.log(newLogin);
  }
  
  const  onlogin=(e)=>{
    e.preventDefault();

    try {
      Axios.post("http://localhost:8080/api/Registered/login",{
     phone:login,
     }).then(res=>{
        setis(res.data);
        if(res.data=="true"){
          history.push("/Donors")
        }else{
          history.push("/")
        }
      console.log(res.data);
    })

      
      
    } catch (error) {
      console.log(error);
    }
  }
    


  //form data
  const[data,setData]=useState({
    name:"",
    age:"",
    sex:"",
    city:"",
    Hospital:"",
    phone:"",
    email:"",
   bloodType:""
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
     
     Hospital:data.Hospital,
     phone:data.phone,
    
     bloodType:data.bloodType,
     
    }).then(res=>{
      console.log(res.data);
    });

    
   // history.push('/Donors')
  }
 const otpurl="https://api.globalshapersjaipur.com/otp/generate"
 const headers = {
  'Content-Type': 'application/json',
  'Accept':'*/*'
};
 
  
 const otpSend=()=>{ Axios.post(
  otpurl,
  {
    "phone":String(data.phone)
     
  },
  {headers}
  ).then(response => {
      console.log("Success ========>", response);
  })
  .catch(error => {
      console.log("Error ========>", error);
  }
)
}
    
  return (
    <div>
       <div className="container">
       
       <form className="bg-light p-5 rounded">
       <h2>Sign in with number</h2>
  <div className="col-auto">
    <label className="visually-hidden">Phone Number</label>
    <input type="Number" className="form-control" id="Phone" onChange={(e)=>handleOnLogin(e)} value={login} placeholder="Registered Phone number"/>
  </div>
  <div className="col-auto">
    <button type="submit" onClick={onlogin} className="btn btn-primary mb-3">Sign in</button>
  </div>
</form>



      <form>
        <h2>Register</h2>
   
  <div className="mb-3">
   <h5>Name</h5>
    <input type="text" required onChange={(e)=>handleOnSubmit(e)} required value={data.name} className="form-control" id="name" required/>
  </div>

  
 
  <div className="mb-3">
   <h5>Number</h5>
    <input type="number"  onChange={(e)=>handleOnSubmit(e)} required value={data.phone} className="form-control" id="phone" required/>
  </div>


  <div className="mb-3">
  <h5>Hospital</h5>
    <input type="text"  onChange={(e)=>handleOnSubmit(e)} required  value={data.Hospital} className="form-control" id="Hospital" required/>
  </div>

  <div className="mb-3">
  <h5>BloodType</h5>
    <input type="text" onChange={(e)=>handleOnSubmit(e)} required value={data.bloodType} className="form-control" id="bloodType" required/>
  </div>

  
  <button type="submit" className="btn btn-primary" onClick={onsubmit}>Register</button>
  

  
  
</form>

<div style={{margin:"10px"}}>
<Popup trigger={<button type="submit" className="btn btn-primary">Number Verification</button>} position="right center">
   
    <div>
      <form>
      <h5>OTP</h5>
    <input type="number" onChange={(e)=>handleOnSubmit(e)}  value={data.bloodType} className="form-control" id="OTP"/>
    <button type="submit" className="btn btn-primary" onClick={onsubmit}>Submit</button>
    </form>
  </div>
  </Popup>

  <button className="btn btn-primary" onClick={otpSend}>Send OTP</button>
  </div>
    </div>
   

    </div>
  )
}

export default PatientForm
