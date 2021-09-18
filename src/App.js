import './App.css';
import axios from 'axios';
import {useState} from 'react';
import {Route, useHistory} from 'react-router-dom'
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
import WorkerAdd from './components/Shift/Update/WorkerAdd';
import WorkerCreate from './components/Workforce/WorkerCreate';
import WorkerDetail from './components/Workforce/WorkerDetail';

require('dotenv').config();

function App() {
  
  let history = useHistory()

  const URL = 'https://schedulrapi.herokuapp.com'
 
  function handleRequest(address){
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`)}

  function handleCreate(data, slug){
    const payload = data
    console.log(payload)
    axios.post(`${URL}/${slug}/`, payload)
  }

  function handleUpdate(data, slug, id){
    const payload = data
    console.log(payload)
    axios.put(`${URL}/${slug}/${id}`, payload)
  }

  const [companyState, setCompanyState] = useState({})

  const [positionState, setPositionState] = useState({})

  const [shiftState, setShiftState] = useState([])

  const [workerState, setWorkerState] = useState({})

  return (
    <div className="App">
      <Nav />
      {/* <AddressForm addressState={addressState} setAddressState={setAddressState} handleRequest={handleRequest}/> */}
      <main>

         {/* Routing for companies list */}
         <Route exact path = '/companies'
            render = {() => <Companies URL={URL}/>}
        />
        
         {/* Routing for new company */}
         <Route exact path = '/companies/new'
            render = {() => <CompanyForm handleCreate={handleCreate} history={history} URL={URL}/>}
        />

        {/* Routing for company edit*/}
        <Route exact path = '/companies/:id/edit'
            render = {() => <EditCompany handleUpdate={handleUpdate} companyState={companyState} key={companyState.id} history={history} URL={URL}/>}
        />

        {/* Routing for company detail */}
        <Route exact path = '/company/:id'
            render = {routerProps => (<CompanyDetail match={routerProps.match} companyState={companyState} key={companyState.id} setCompanyState={setCompanyState} URL={URL}/>)}
        />

        {/* Routing for shift list */}
        <Route exact path = '/shifts'
            render = {() => <Shifts shiftState={shiftState} URL={URL}/>}
        />

        {/* Routing for new company */}
        <Route exact path = '/shifts/new'
            render = {() => <CompanySelect handlecreate={handleCreate} history={history} URL={URL}/>}
        />

         {/* Routing for shift edit */}
         <Route exact path = '/shifts/:id/edit'
            render = {() => <ShiftEdit shiftState={shiftState} setShiftState={setShiftState} history={history} URL={URL}/>}
        />

         {/* Routing for shift edit */}
         <Route exact path = '/shifts/:id/add'
            render = {routerProps => ( <WorkerAdd match={routerProps.match} shiftState={shiftState} setShiftState={setShiftState} history={history} URL={URL}/>) }
        />

        {/* Routing for shift detail */}
        <Route exact path = '/shift/:id'
            render = {routerProps => (<ShiftDetail match={routerProps.match} shiftState={shiftState} setShiftState={setShiftState} key={shiftState.id} URL={URL}/>)}
        />
        
         {/* Routing for new position */}
         <Route exact path = '/positions/new'
            render = {() => <PositionForm handleCreate={handleCreate} history={history} URL={URL}/>}
        />

        {/* Routing for company edit*/}
        <Route exact path = '/positions/:id/edit'
           render = {() => <EditPosition handleUpdate={handleUpdate} positionState={positionState} key={positionState.id} history={history} URL={URL}/>}
       />

        {/* Routing for new company */}
        <Route exact path = '/position/:id'
            render = {routerProps => (<PositionDetail handleUpdate={handleUpdate} setPositionState={setPositionState} positionState={positionState} key={positionState.id} match={routerProps.match} URL={URL}/>)}
        />

        {/* Routing for positions list */}
        <Route exact path = '/positions'
            render = {() => <PositionsList URL={URL} />}
        />

         {/* Routing for companies list */}
         <Route exact path = '/workforce'
            render = {() => <Workforce URL={URL}/>}
        />

        {/* Routing for new worker */}
        <Route exact path = '/workforce/new'
            render = {() => <WorkerCreate handleCreate={handleCreate} history={history} URL={URL}/>}
        />

          {/* Routing for worker detail */}
          <Route exact path = '/workforce/:id/detail'
            render = {routerProps => (<WorkerDetail match={routerProps.match} workerState={workerState} setWorkerState={setWorkerState} URL={URL}/>)}
        />

      </main>
    </div>
  );
}

export default App;
