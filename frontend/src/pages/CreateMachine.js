import React, { useState } from "react";
import axios from "axios";

export default function CreateMachinePage() {
  const [machine, setMachine] = useState({
    
    name: "",
    productedParts: 0,
    status: 1,
  });

  const handleChange = (e) => {
    setMachine({ ...machine, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7121/api/machine/create", machine);
      console.log("Machine created successfully!");
      
      setMachine({ name: "", productedParts: "", status: "" });
      console.log(machine);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
         
        </div>
        <div className="col-md-9">
          <h2>Create New Machine</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={machine.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="producedParts">Producted Parts</label>
              <input
                type="number"
                className="form-control"
                id="productedParts"
                name="productedParts"
                value={machine.productedParts}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                className="form-control"
                id="status"
                name="status"
                value={machine.status}
                onChange={handleChange}
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Machine
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
