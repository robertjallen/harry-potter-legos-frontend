import React from "react";
import {Link} from 'react-router-dom';
import {deleteLego} from '../actions';
import { useDispatch } from "react-redux";
import {
    Card, CardImg,
    CardTitle, Button, CardBody
  } from 'reactstrap';


function LegoList(props) {
  console.log(props.state.legos)

  const createRoute = () => {props.history.push('/form')}
  const dispatch = useDispatch()
  // const remove = (ID) => {
  //   return  useDispatch(deleteLego(ID))
  // }

  return (
      <>
      <h1>MEGANS HARRY POTTER LEGO SETS</h1>
      <Button color="primary" size="lg" onClick={createRoute}>ADD LEGOS</Button>
      <div className="characters-list-wrapper">
      {props.state.legos.map((lego, index) => (
          <Card color="warning" className="character-card" key={index}>
            <Link to={`/legos/${lego.id}`}></Link>
              <CardImg src={lego.image} alt={lego.name}/>
              <CardBody>
                <CardTitle>{lego.name}</CardTitle>
                <CardTitle>{lego.description}</CardTitle>
                <Button onClick={() => props.editRoute(lego.id)} color="info" size="sm">Edit</Button>
                <Button onClick={dispatch(deleteLego(lego.id))} color="danger" size="sm">Delete</Button>
              </CardBody>
            <Link />
          </Card>
      ))}
    </div>
    </>
  );
}

export default LegoList;