import React from "react";

const DogList = (props) => {
  const dogTableData = props.dogData.map((dog) => (
    <tr key={`Dog_${dog.id}`}>
      <td>{dog.id}</td>
      <td>{dog.breedName}</td>
      <td>{dog.size}</td>
      <td>
        <button onClick={() => props.editDog(dog)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteDog(dog.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Breed</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>{dogTableData}</tbody>
      </table>
    </div>
  );
};

export default DogList;
