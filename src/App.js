import React, {useState, useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Create from "./components/Create";
import AvengersList from "./components/AvengersList";
import {fetch} from './actions';
import Avenger from './components/Avenger';
import Home from './components/Home';
import { useSelector, useDispatch } from "react-redux";


function App(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(fetch())
  },[])

  // const [avengers, setAvengers] = useState([]);
  

  // const deleteRoute = (id) => {
  // const newAvengers = avengers.filter((avenger) => avenger.id !== id)
  // setAvengers(newAvengers);
  // }

  // const editRoute = (id) => {
  //   // const newAvengers = avengers.filter((avenger) => avenger.id !== id)
  //   // setAvengers(newAvengers);
  // }



  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/avengers' render={props => <AvengersList {...props} state={state}/> }/>
      <Route exact path='/form' render={props => <Create {...props} state={state}/>}/>
      <Route path='/form/:id' render={props => <Create {...props} state={state}/>}/>
      <Route path='/avengers/:id' render={(props) => <Avenger {...props} state={state}/>}/>
    </div>
  );
}

export default App;
