import React, {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Create from "./components/Create";
import AvengersList from "./components/AvengersList";
import {avengersData} from './data';
import Avenger from './components/Avenger';

function App(props) {
  const [avengers, setAvengers] = useState(avengersData);

  
  return (
    <div className="App">
     <h1>My Characters</h1>
      <Route exact path='/avengers' render={props => <AvengersList {...props} avengers={avengers}/> }/>
      <Route exact path='/form' render={props => <Create {...props} avengers={avengers} setAvengers={setAvengers}/>}/>
      <Route path='/avengers/:id' render={(props) => <Avenger {...props} avengers={avengers}/>}/>
    </div>
  );
}

export default App;
