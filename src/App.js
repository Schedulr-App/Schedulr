import './App.css';
import axios from 'axios';
import {Fragment, useState} from 'react';
import {Route, useHistory} from 'react-router-dom'
import Nav from './components/Nav';
import Companies from './components/Companies/View/Companies';
import CompanyDetail from './components/Companies/View/CompanyDetail';
import Map from './components/Shift/View/Map'
import AddressForm from './components/Shift/Create/AddressForm';
import Shifts from './components/Shift/View/Shifts';
import ShiftDetail from './components/Shift/View/ShiftDetail';
import CompanyForm from './components/Companies/Create/CompanyForm'
import EditCompany from './components/Companies/Update/EditCompany';
import CompanySelect from './components/Shift/Create/CompanySelect';
import PositionsList from './components/Shift/Positions/PositionsList';
import PositionForm from './components/Shift/Positions/PositionForm';
import PositionDetail from './components/Shift/Positions/PositionDetail';
import EditPosition from './components/EditPosition';
import Workforce from './components/Workforce/View/Workforce';
import ShiftEdit from './components/Shift/Update/ShiftEdit';
import WorkerCreate from './components/Workforce/Create/WorkerCreate';
import WorkerDetail from './components/Workforce/View/WorkerDetail';
import Reporting from './components/Reporting';
import ManageStaff from './components/Shift/Update/ManageStaff';
import '@progress/kendo-theme-default/dist/all.css';
import Dashboard from './components/Metrics/Dashboard';

require('dotenv').config();

function App() {
  
  let history = useHistory()

  const URL = 'http://localhost:8000'
 
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
         <Route exact path = '/shifts/:id/manage'
            render = {routerProps => (<ManageStaff match={routerProps.match} shiftState={shiftState} setShiftState={setShiftState} history={history} URL={URL}/>)}
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

        {/* Routing for reports list */}
        <Route exact path = '/reporting'
            render = {() => <Reporting URL={URL}/>}
        />

        {/* Routing for dashboard */}
        <Route exact path = '/dashboard'
            render = {() => <Dashboard URL={URL}/>}
        />

      </main>
    </div>
  );
}

export default App;
