import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import Axios from "axios"
import Popup from 'reactjs-popup';
 
const url="https://apiplasma.herokuapp.com/api/Patient"

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
      Axios.post("https://apiplasma.herokuapp.com/api/Registered/login",{
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
    
  //OTP sending
  
  const [OTP,setOTP]=useState("");

  const handleOnOTP=(e)=>{
     const newOTPcheck=e.target.value
    setOTP(newOTPcheck);
    console.log(newOTPcheck);
  }


  const  onOTP=(e)=>{
    e.preventDefault();

    try {
      Axios.post("https://api.globalshapersjaipur.com/otp/validate",{
        "phone":String(data.phone),
        "otp":String(OTP)
     },{headers}).then(res=>{
        console.log(res.status);
        if (res.status==200) {
          
          try {
            Axios.post("https://apiplasma.herokuapp.com/api/Registered",{
           phone:data.phone,
           }).then(res=>{
              console.log(res.data);
          })
      
            
            
          }catch (error) {
            console.log(error);
          }
        }

         else {
          console.log("Please try again")
          
        }
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
    <button type="submit" onClick={onlogin} className="btn btn-primary mb-3">
    
      Sign in
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
    </svg>
      </button>
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

  
  <button type="submit" className="btn btn-primary" onClick={onsubmit}>Register
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
  </button>
  

  
  
</form>

<div style={{margin:"10px"}}>
<Popup trigger={<button type="submit" className="btn btn-primary">Number Verification  
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sim-fill" viewBox="0 0 16 16">
  <path d="M5 4.5a.5.5 0 0 1 .5-.5h2v2H5V4.5zM8.5 6V4h2a.5.5 0 0 1 .5.5V6H8.5zM5 7h6v2H5V7zm3.5 3H11v1.5a.5.5 0 0 1-.5.5h-2v-2zm-1 0v2h-2a.5.5 0 0 1-.5-.5V10h2.5z"/>
  <path d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V3.414a1.5 1.5 0 0 0-.44-1.06L11.647.439A1.5 1.5 0 0 0 10.586 0H3.5zm2 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3z"/>
</svg>
  </button>} position="right center">
   
    <div>
      <form>
      <h5>OTP</h5>
    <input type="number" className="form-control" id="OTP" onChange={(e)=>handleOnOTP(e)} value={OTP}/>
    <button type="submit" className="btn btn-primary" onClick={onOTP}>Submit</button>
    </form>
  </div>
  </Popup>

  <button className="btn btn-primary"  onClick={otpSend}>Send OTP
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
  </button>
  </div>
    </div>
   

    </div>
  )
}

export default PatientForm
