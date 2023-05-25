import React, { useState } from "react";
import axios from 'axios'

export default function CreateEquipmentPage() {
  const [equipment, setEquipment] = useState({
    
    name: "",
    amount: ""
  });

  const handleChange = (e) => {
    setEquipment({ ...equipment, [e.target.name]: e.target.value });
  };

 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7121/api/equipment/create", equipment);
      console.log("Equipment created successfully!");
      
      setEquipment({ name: "", amount: ""});
      console.log(equipment);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container" style={{ marginLeft: "300px" }}>
      <h2>Create Equipment</h2>
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={equipment.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            value={equipment.amount}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
