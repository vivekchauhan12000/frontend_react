import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./components/Header"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import DonorForm from "./components/DonorForm"
import DonorList from "./components/DonorList"
import ContactUs from "./Pages/Contact"
import PatientForm from "./components/PatientForm"

import './App.css';

function App() {
  return (
    <Router>
    
    <div className="App">
     <Header/>
    
     <Switch>
          <Route exact path="/" component={Home}/>
            
          <Route exact path="/DonorDetails" component={DonorForm} />
         
         
          <Route exact path="/Donorlist" component={PatientForm}/>
          
          <Route exact path="/ContactUs" component={ContactUs}/>
         
         <Route exact path="/Donors" component={DonorList}/>
        </Switch>

   
    </div>
    </Router>
  );
}

export default App;
