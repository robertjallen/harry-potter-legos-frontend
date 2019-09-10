import React, { useState } from "react";

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


const Create = props => {
  const initialAvenger = { name: "", img: "" };
  const [newAvenger, setNewAvenger] = useState(initialAvenger);

  const handleChange = event => {
    setNewAvenger({
      ...newAvenger,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newAvenger.name || !newAvenger.img) {
      alert("Please fill out both fields!");
    } else {
      props.setAvengers([newAvenger, ...props.avengers]);
      props.history.push('/avengers');
      resetForm();
    }
  };

  const resetForm = () => {
    setNewAvenger(initialAvenger);
  };

  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={newAvenger.name}/>
            
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>Image URL</Label>
          <Col sm={10}>
            <Input onChange={handleChange} type="textarea" name="img" id="exampleText" />
          </Col>
        </FormGroup>
      
      {/* <textarea name="img" onChange={handleChange} value={newNote.img} /> */}

      <Button type="submit">Submit</Button>
      <Button type="button" onClick={resetForm}>
        Reset
      </Button>
    </Form>
  );
};

export default Create;
