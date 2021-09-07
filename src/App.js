import './App.css';
import axios from 'axios';
import {useState} from 'react';
import {Route} from 'react-router-dom'
import Nav from './components/Nav';
import Companies from './components/Companies';
import CompanyDetail from './components/CompanyDetail';
import Map from './components/Map'
import AddressForm from './components/AddressForm';
import Shifts from './components/Shifts';
import ShiftDetail from './components/ShiftDetail';
import CompanyForm from './components/CompanyForm'
import EditCompany from './components/EditCompany';

require('dotenv').config();

function App() {
  
 
  function handleRequest(address){
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => console.log(res.data.results[0].geometry.location))
  }

  function createCompany(data){
    const payload = data
    console.log(payload)
    axios.post(`http://localhost:8000/companies/`, payload)
      .then(res => console.log(res))
  }

  function updateCompany(data, id){
    const payload = data
    console.log(payload)
    axios.put(`http://localhost:8000/companies/${id}`, payload)
      .then(res => console.log(res))
  }

  // handleRequest()

  const [addressState, setAddressState] = useState({
    street: '',
    city: '', 
    state: '',
    zip: ''
  })

  const [companyState, setCompanyState] = useState({})

  return (
    <div className="App">
      <Nav />
      {/* <AddressForm addressState={addressState} setAddressState={setAddressState} handleRequest={handleRequest}/> */}
      <main>

         {/* Routing for companies list */}
         <Route exact path = '/companies'
            render = {() => <Companies />}
        />

         {/* Routing for new company */}
         <Route exact path = '/companies/new'
            render = {() => <CompanyForm createCompany={createCompany}/>}
        />

        {/* Routing for company detail */}
        <Route exact path = '/companies/:id'
            render = {routerProps => (<CompanyDetail match={routerProps.match} companyState={companyState} key={companyState.id} setCompanyState={setCompanyState}/>)}
        />

        {/* Routing for company edit*/}
        <Route exact path = '/companies/:id/edit'
            render = {() => <EditCompany updateCompany={updateCompany} companyState={companyState} key={companyState.id}/>}
        />

        {/* Routing for shift list */}
        <Route exact path = '/shifts'
            render = {() => <Shifts />}
        />

        {/* Routing for shift detail */}
        <Route exact path = '/shifts/:id'
            render = {routerProps => (<ShiftDetail match={routerProps.match} />)}
        />

        {/* Routing for map  */}
        <Route exact path = '/map'
            render = {() => <Map />}
        />

        

      </main>
    </div>
  );
}

export default App;
