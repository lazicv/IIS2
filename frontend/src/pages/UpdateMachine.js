import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateMachinePage() {
  /*const [machine, setMachine] = useState({
    id: "",
    name: "",
    productedParts: 0,
    status: ""
  }); */
  const [machine, setMachine] = useState([])

 /* useEffect(() => {
    loadMachine(machine);
    console.log("m2", machine);
  }, []);

  const loadMachine = async () => {
    try {
      if (machine.id) {
        const response = await axios.get(`http://localhost:7121/api/machine/findbyid?id=${machine.id}`);
        console.log("m1", machine.id);
        const { id, name, productedParts, status } = response.data;
        setMachine({ id, name, productedParts, status });
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  const machineId = JSON.parse(localStorage.getItem('machineId'))
  useEffect(() => {
    const fetchMachine = async () => {
      try {
        const response = await axios.get(`http://localhost:7121/api/machine/findbyid` + machineId);
        setMachine(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMachine();
  }, []);

  const handleChange = (e) => {
    setMachine({ ...machine, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put("http://localhost:7121/api/machine/update", machine);
      console.log(response.data); 
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ marginLeft: "300px" }}>
      <h2>Update Machine</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="productedParts">Produced Parts:</label>
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
          <label htmlFor="status">Status:</label>
          <select
            className="form-control"
            id="status"
            name="status"
            value={machine.status}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
}
