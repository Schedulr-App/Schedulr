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
import { Redirect } from 'react-router';
import ShiftForm from './components/ShiftForm';
import CompanySelect from './components/CompanySelect';
import PositionsList from './components/PositionsList';
import PositionForm from './components/PositionForm';
import PositionDetail from './components/PositionDetail';
import EditPosition from './components/EditPosition';
import Workforce from './components/Workforce';
import ShiftEdit from './components/ShiftEdit';

require('dotenv').config();

function App() {
  
 
  function handleRequest(address){
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => console.log(res.data.results[0].geometry.location))
  }

  function handleCreate(data, slug){
    const payload = data
    console.log(payload)
    axios.post(`http://localhost:8000/${slug}/`, payload)
      .then(res => console.log(res))
  }

  function handleUpdate(data, slug, id){
    const payload = data
    console.log(payload)
    axios.put(`http://localhost:8000/${slug}/${id}`, payload)
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

  const [positionState, setPositionState] = useState({})

  const [shiftState, setShiftState] = useState({})

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
            render = {() => <CompanyForm handleCreate={handleCreate}/>}
        />

        {/* Routing for company edit*/}
        <Route exact path = '/companies/:id/edit'
            render = {() => <EditCompany handleUpdate={handleUpdate} companyState={companyState} key={companyState.id}/>}
        />

        {/* Routing for company detail */}
        <Route exact path = '/companies/:id'
            render = {routerProps => (<CompanyDetail match={routerProps.match} companyState={companyState} key={companyState.id} setCompanyState={setCompanyState}/>)}
        />


        {/* Routing for new company */}
        <Route exact path = '/shifts/new'
            render = {() => <CompanySelect handlecreate={handleCreate}/>}
        />

        {/* Routing for shift list */}
        <Route exact path = '/shifts'
            render = {() => <Shifts />}
        />

         {/* Routing for shift edit */}
         <Route exact path = '/shifts/:id/edit'
            render = {() => <ShiftEdit shiftState={shiftState} setShiftState={setShiftState}/>}
        />


        {/* Routing for shift detail */}
        <Route exact path = '/shifts/:id'
            render = {routerProps => (<ShiftDetail match={routerProps.match} shiftState={shiftState} setShiftState={setShiftState}/>)}
        />

        
         {/* Routing for new position */}
         <Route exact path = '/positions/new'
            render = {() => <PositionForm handleCreate={handleCreate}/>}
        />

        {/* Routing for company edit*/}
        <Route exact path = '/positions/:id/edit'
           render = {() => <EditPosition handleUpdate={handleUpdate} positionState={positionState} key={positionState.id}/>}
       />

        {/* Routing for new company */}
        <Route exact path = '/positions/:id'
            render = {routerProps => (<PositionDetail handleUpdate={handleUpdate} setPositionState={setPositionState} positionState={positionState} key={positionState.id} match={routerProps.match}/>)}
        />

        {/* Routing for positions list */}
        <Route exact path = '/positions'
            render = {() => <PositionsList />}
        />

         {/* Routing for companies list */}
         <Route exact path = '/workforce'
            render = {() => <Workforce />}
        />

      </main>
    </div>
  );
}

export default App;
