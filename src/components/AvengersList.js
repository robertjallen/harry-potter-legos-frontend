import React from "react";
import {Link} from 'react-router-dom';
import {
    Card, CardImg,
    CardTitle, Button, CardBody
  } from 'reactstrap';


function Avengers(props) {

    const createRoute = () => {props.history.push('/form')}
    const deleteRoute = () => {
        console.log(props)
    }


  return (
      <>
      <Button color="primary" size="lg" onClick={createRoute}>Add Character</Button>
      <div className="characters-list-wrapper">
      {props.avengers.map((avenger, index) => (
          <Card color="warning" className="character-card" key={index}>
            <Link to={`/avenger/${avenger.id}`}></Link>
              <CardImg src={avenger.img} alt={avenger.name}/>
              <CardBody>
                <CardTitle>{avenger.name}</CardTitle>
                <Button color="info" size="sm">Edit</Button>
                <Button onClick={deleteRoute} color="danger" size="sm">Delete</Button>
              </CardBody>
            <Link />
          </Card>
      ))}
    </div>
    </>
  );
}

export default Avengers;