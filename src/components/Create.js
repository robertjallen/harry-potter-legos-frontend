import React, { useState } from "react";
import {post} from '../actions';
import { useDispatch } from "react-redux";

const Create = props => {

  const dispatch = useDispatch();

  const initialLego = { name: "", description: "", image: ""};

  const [newLego, setNewLego] = useState(initialLego);

  const handleChange = event => {
    setNewLego({
      ...newLego,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newLego.name || !newLego.description || !newLego.image) {
      alert("Please fill out all fields!");
    } else {
      dispatch(post(newLego))
      // props.setLegos([newLego, ...props.legos]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewLego(initialLego);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newLego.name}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        value={newLego.image}
      />
      <textarea name="description" onChange={handleChange} value={newLego.description}  placeholder="Description"/>

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;