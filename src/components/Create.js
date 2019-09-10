import React, { useState } from "react";

const Create = props => {
  const initialNote = { name: "", img: "" };
  const [newNote, setNewNote] = useState(initialNote);

  const handleChange = event => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newNote.name || !newNote.img) {
      alert("Please fill out both fields!");
    } else {
      props.setNotes([newNote, ...props.notes]);
      props.history.push('/');
      resetForm();
    }
  };

  const resetForm = () => {
    setNewNote(initialNote);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newNote.name}
      />
      <textarea name="img" onChange={handleChange} value={newNote.img} />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;
