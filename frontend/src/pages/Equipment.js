import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EquipmentList() {
  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    fetchEquipmentList();
  }, []);

  const fetchEquipmentList = async () => {
    try {
      const response = await axios.get("http://localhost:7121/api/equipment/getall");
      setEquipmentList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ marginLeft: "300px" }}>
      <h2>Equipment List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {equipmentList.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.id}</td>
              <td>{equipment.name}</td>
              <td>{equipment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .table {
          font-size: 16px;
        }
        th {
          font-weight: bold;
        }
        td {
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}
