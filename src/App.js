import React, {useState} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Create from "./components/Create";
import AvengersList from "./components/AvengersList";
import {avengersData} from './data';
import Avenger from './components/Avenger';

function App(props) {
  const [avengers, setAvengers] = useState(avengersData);

  const deleteRoute = (id) => {
  const newAvengers = avengers.filter((avenger) => avenger.id !== id)
  setAvengers(newAvengers);
  }

  return (
    <div className="App">
     
     <Link to='/avengers'>Enter</Link>
      <Route exact path='/avengers' render={props => <AvengersList deleteRoute={deleteRoute} {...props} avengers={avengers}/> }/>
      <Route exact path='/form' render={props => <Create {...props} avengers={avengers} setAvengers={setAvengers}/>}/>
      <Route path='/avengers/:id' render={(props) => <Avenger {...props} avengers={avengers}/>}/>
    </div>
  );
}

export default App;
