import React from "react";

const AddDogPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Add Dog</h2>
      <form className="h-form" onSubmit={props.addDog}>
        <label className="h-label">Breed</label>
        <input
          className="h-input"
          type="text"
          name="tempBreedName"
          value={props.tempBreedName}
          onChange={props.handleInputChange}
        />
        <label className="h-label">Size</label>
        <input
          className="h-input"
          type="text"
          name="tempSize"
          value={props.tempSize}
          onChange={props.handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddDogPanel;
