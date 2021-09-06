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

require('dotenv').config();

function App() {
  
 
  function handleRequest(address){
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => console.log(res.data.results[0].geometry.location))
  }

  // handleRequest()

  const [addressState, setAddressState] = useState({
    street: '',
    city: '', 
    state: '',
    zip: ''
  })

  return (
    <div className="App">
      <Nav />
      <AddressForm addressState={addressState} setAddressState={setAddressState} handleRequest={handleRequest}/>
      <main>

         {/* Routing for companies list */}
         <Route exact path = '/companies'
            render = {() => <Companies />}
        />

        {/* Routing for company detail */}
        <Route exact path = '/companies/:id'
            render = {routerProps => (<CompanyDetail match={routerProps.match} />)}
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
