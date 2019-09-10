import React from "react";
import {
    Card, CardImg,
    CardTitle
  } from 'reactstrap';


  

function Note(props) {
    console.log(props)
    const createRoute = () => {
        props.history.push('/form')
    }
  return (
      <>
    <button onClick={createRoute}>Add Character</button>
    <div className="characters-list-wrapper">
    
      {props.notes.map((note, index) => (
        <Card className="character-card" key={index}>
          <CardImg src={note.img} alt={note.name}/>
          <CardTitle>{note.name}</CardTitle>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Note;