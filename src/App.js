import React, { Component } from "react";
import "./App.css";
import DogList from "./DogList";
import AddDogPanel from "./AddDogPanel";
import EditDogPanel from "./EditDogPanel";

class App extends Component {
  state = {
    runningIdValue: 4,
    editPanelOpen: false,
    tempId: null,
    tempBreedName: "",
    tempSize: "",
    dogData: [
      { id: 1, breedName: "Golden Retriever", size: "Large" },
      { id: 2, breedName: "English Bulldog", size: "Medium" },
      { id: 3, breedName: "Pekingese", size: "Small" },
    ],
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleEditPanel = () => {
    this.setState({ editPanelOpen: !this.state.editPanelOpen });
  };

  addDog = (e) => {
    e.preventDefault();
    const newDog = {
      id: this.state.runningIdValue,
      breedName: this.state.tempBreedName,
      size: this.state.tempSize,
    };
    this.setState({
      runningIdValue: this.state.runningIdValue + 1,
      tempBreedName: "",
      tempSize: "",
      dogData: [...this.state.dogData, newDog],
    });
  };

  updateDog = (e) => {
    e.preventDefault();
    console.log(`updateDog...`);
    const updatedDog = {
      id: this.state.tempId,
      breedName: this.state.tempBreedName,
      size: this.state.tempSize,
    };
    console.log(updatedDog);

    const updatedDogData = this.state.dogData.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );

    this.setState({
      editPanelOpen: false,
      tempId: null,
      tempBreedName: "",
      tempSize: "",
      dogData: updatedDogData,
    });
  };

  editDog = (dog) => {
    console.log(`editDog...${dog}`);
    this.setState({
      editPanelOpen: true,
      tempId: dog.id,
      tempBreedName: dog.breedName,
      tempSize: dog.size,
    });
  };

  deleteDog = (id) => {
    this.setState({
      dogData: this.state.dogData.filter((dog) => id !== dog.id),
    });
  };

  render() {
    return (
      <div className="container-outer">
        <h1>App</h1>
        <DogList
          dogData={this.state.dogData}
          editDog={this.editDog}
          deleteDog={this.deleteDog}
        />
        {this.state.editPanelOpen ? (
          <EditDogPanel
            tempBreedName={this.state.tempBreedName}
            tempSize={this.state.tempSize}
            handleInputChange={this.handleInputChange}
            updateDog={this.updateDog}
          />
        ) : (
          <AddDogPanel
            dogData={this.state.dogData}
            tempBreedName={this.state.tempBreedName}
            tempSize={this.state.tempSize}
            handleInputChange={this.handleInputChange}
            addDog={this.addDog}
          />
        )}
      </div>
    );
  }
}

export default App;
