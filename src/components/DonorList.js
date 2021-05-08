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
    const response = await fetch("https://apiplasma.herokuapp.com/api/Donor");
    const data = await response.json();
    console.log(data);
   await setData(data);
    
    
  },[]);
  return (
    <div className="container">
    <h2>Donor Search</h2> 
       <div>
       <div className="input-group mb-3">
       <label className="input-group-text">Search
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
       </label>
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
