import React, { useState } from "react";

export default function CreateMaintenancePlan() {
  const [maintenancePlan, setMaintenancePlan] = useState({
    
    machineId: "",
    machineName: "",
    maxProd: "",
    maxDate: "",
    equipmentAmount: "",
    parts: "",
    serviceBookId: "",
    version: ""
  });

  const handleChange = (e) => {
    setMaintenancePlan({ ...maintenancePlan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(maintenancePlan);
    
    setMaintenancePlan({
      
      machineId: "",
      machineName: "",
      maxProd: "",
      maxDate: "",
      equipmentAmount: "",
      parts: "",
      serviceBookId: "",
      version: ""
    });
  };

  return (
    <div className="container" style={{ marginLeft: "300px" }}>
      <h2>Create Maintenance Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={maintenancePlan.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="machineId">Machine ID:</label>
          <input
            type="text"
            className="form-control"
            id="machineId"
            name="machineId"
            value={maintenancePlan.machineId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="machineName">Machine Name:</label>
          <input
            type="text"
            className="form-control"
            id="machineName"
            name="machineName"
            value={maintenancePlan.machineName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxProd">Max Production:</label>
          <input
            type="text"
            className="form-control"
            id="maxProd"
            name="maxProd"
            value={maintenancePlan.maxProd}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxDate">Max Date:</label>
          <input
            type="datetime-local"
            className="form-control"
            id="maxDate"
            name="maxDate"
            value={maintenancePlan.maxDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="equipmentAmount">Equipment Amount:</label>
          <input
            type="text"
            className="form-control"
            id="equipmentAmount"
            name="equipmentAmount"
            value={maintenancePlan.equipmentAmount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="parts">Parts:</label>
          <input
            type="text"
            className="form-control"
            id="parts"
            name="parts"
            value={maintenancePlan.parts}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="serviceBookId">Service Book ID:</label>
          <input
            type="text"
            className="form-control"
            id="serviceBookId"
            name="serviceBookId"
            value={maintenancePlan.serviceBookId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="version">Version:</label>
          <input
            type="text"
            className="form-control"
            id="version"
            name="version"
            value={maintenancePlan.version}
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
