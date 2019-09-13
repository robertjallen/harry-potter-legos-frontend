import React from "react";
import {Link} from 'react-router-dom';
import {
    Card, CardImg,
    CardTitle, Button, CardBody
  } from 'reactstrap';


function AvengersList(props) {

  const createRoute = () => {props.history.push('/form')}

  return (
      <>
      <h1>My Characters</h1>
      <Button color="primary" size="lg" onClick={createRoute}>Add Character</Button>
      <div className="characters-list-wrapper">
      {props.avengers.map((avenger, index) => (
          <Card color="warning" className="character-card" key={index}>
            <Link to={`/avenger/${avenger.id}`}></Link>
              <CardImg src={avenger.img} alt={avenger.name}/>
              <CardBody>
                <CardTitle>{avenger.name}</CardTitle>
                <Button onClick={() => props.editRoute(avenger.id)} color="info" size="sm">Edit</Button>
                <Button onClick={() => props.deleteRoute(avenger.id)} color="danger" size="sm">Delete</Button>
              </CardBody>
            <Link />
          </Card>
      ))}
    </div>
    </>
  );
}

export default AvengersList;