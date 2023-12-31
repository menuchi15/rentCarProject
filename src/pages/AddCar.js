import React, { useState } from "react";
import "./App.css"

function AddCar({addCarToList, returnToHomePage}) {
  const [image, setImage] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      image,
      manufacturer,
      model,
      year,
      price,
      location
    };

    addCarToList(newCar);
    returnToHomePage();
  };

  return (
    <div className="form-wrap">
    <div className="main-div">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div>
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
    <div onClick={returnToHomePage}><img className="home" src={"./../home.png"}></img></div>
    </div>
  );
}

export default AddCar;