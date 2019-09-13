import React, {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Create from "./components/Create";
import AvengersList from "./components/AvengersList";
import {avengersData} from './data';
import Avenger from './components/Avenger';
import Home from './components/Home';


function App(props) {

  const [avengers, setAvengers] = useState(avengersData);
  

  const deleteRoute = (id) => {
  const newAvengers = avengers.filter((avenger) => avenger.id !== id)
  setAvengers(newAvengers);
  }

  const editRoute = (id) => {
    // const newAvengers = avengers.filter((avenger) => avenger.id !== id)
    // setAvengers(newAvengers);
  }



  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/avengers' render={props => <AvengersList deleteRoute={deleteRoute} {...props} avengers={avengers}/> }/>
      <Route exact path='/form' render={props => <Create {...props} avengers={avengers} setAvengers={setAvengers}/>}/>
      <Route path='/form/:id' render={props => <Create {...props} avengers={avengers} setAvengers={setAvengers} editRoute={editRoute}/>}/>
      <Route path='/avengers/:id' render={(props) => <Avenger {...props} avengers={avengers}/>}/>
    </div>
  );
}

export default App;
