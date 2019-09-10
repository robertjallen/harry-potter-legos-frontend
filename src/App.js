import React, {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Create from "./components/Create";
import Note from "./components/Note";
import {avengers} from './data';

function App(props) {
  const [notes, setNotes] = useState(avengers);

  
  return (
    <div className="App">
     <h1>My Characters</h1>
     
      <Route exact path='/' render={props => <Note {...props} notes={notes}/> }/>
      <Route path='/form' render={props => <Create {...props} notes={notes} setNotes={setNotes}/>}/>
    </div>
  );
}

export default App;
