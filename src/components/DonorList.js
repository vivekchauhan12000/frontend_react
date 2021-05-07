import React,{useState,useEffect} from 'react'
import Card from "../components/ListCard";




export default function DonorList() {

  const [data, setData] = useState([]);
  const [bloodGroup,setbloodGroup]=useState([""]);
  const [city,setCity]=useState([""]);

  const handleOnSubmit=(e)=>{
   const newData=e.target.value
    setbloodGroup(newData);
   }

   const Searchcity=(e)=>{
    const newData=e.target.value
    setCity(newData);
   }
   


  useEffect( async () => {
    const response = await fetch("http://localhost:8080/api/Donor");
    const data = await response.json();
    console.log(data);
   await setData(data);
    
    
  },[]);
  return (
    <div className="container">
    <h2>Donor Search</h2> 
       <div>
       <div className="input-group mb-3">
       <label className="input-group-text">Search</label>
  <select className="form-select" id="covidStatus" required onChange={(e)=>handleOnSubmit(e)} value={bloodGroup}>
    <option selected value="">Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>

  </select>
        <input type="text" placeholder="City" onChange={(e)=>Searchcity(e)} value={city} className="form-control" aria-label="Text input with dropdown button" />
</div>

         </div> 
    { data.filter((val)=>{
        if(bloodGroup==""){
          return val
        }else if (val.bloodType.toLowerCase()==bloodGroup.toLowerCase()){
          return val
        }
      }).filter((val)=>{
        if(city==""){
          return val
        }else if (val.location.toLowerCase()==city.toLowerCase()){
          return val
        }
      }).map((Donor) => (
              <div key={Donor._id}> <Card name={Donor.name} loc={Donor.location} blood={Donor.bloodType} contact={Donor.phone}/></div>
            ))}
    </div>
  )
}
