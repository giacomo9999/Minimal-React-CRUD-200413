import React from "react";

const EditDogPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Edit Dog</h2>
      <form className="h-form">
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
        <button onClick={props.updateDog}>Submit</button>
        <button onClick={props.toggleEditPanel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditDogPanel;
