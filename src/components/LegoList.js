import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {deleteLego, fetch} from '../actions';
import { connect } from "react-redux";
import {
    Card, CardImg,
    CardTitle, Button, CardBody
  } from 'reactstrap';


function LegoList(props) {
  console.log(props)
  const [legoState, setLegoState] = useState([])
  const {fetch, deleteLego} = props
  const createRoute = () => {props.history.push('/form')}

  useEffect(() => {
    if(fetch){
      fetch()
      console.log(props)
    }
  },[])

  useEffect(() => {
      setLegoState(props.legos)
   }, [props.legos])
  

  if (props.isLoading) {
      return (<>...</>)
   } else {

    return (
    
      <>
      <h1>MEGANS HARRY POTTER LEGO SETS</h1>
      <Button color="primary" size="lg" onClick={createRoute}>ADD LEGOS</Button>
      <div className="characters-list-wrapper">
      {legoState.map((lego, index) => (
          <Card color="warning" className="character-card" key={index}>
            <Link to={`/legos/${lego.id}`}></Link>
              <CardImg src={lego.image} alt={lego.name}/>
              <CardBody>
                <CardTitle>{lego.name}</CardTitle>
                <CardTitle>{lego.description}</CardTitle>
                <Button onClick={() => props.editRoute(lego.id)} color="info" size="sm">Edit</Button>
                <Button onClick={() => (deleteLego(lego.id))} color="danger" size="sm">Delete</Button>
              </CardBody>
            <Link />
          </Card>
      ))}
    </div>
    </>
  );
  }

}

const mapStateToProps = (state) => {
  const legos = state.legos || []
  const isLoading = state.isLoading || false
  return {
    legos,
    isLoading
  }
  console.log(state)
}

export default connect(mapStateToProps, {deleteLego, fetch})(LegoList);