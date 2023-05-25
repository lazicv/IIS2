import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MachinesPage = () => {
  const [machines, setMachines] = useState([]);

  /*useEffect(() => {
    // Fetch machines data from the server
    const fetchMachines = async () => {
      try {
        const response = await axios.get("http://localhost:7121/api/machine/getall");
        setMachines(response.data);
        console.log("try",response.data);
      } catch (error) {
        console.error("Error fetching machines:", error);
      }
    };

    fetchMachines();
    console.log("fetch");
  }, []);*/

  
  const fetchMachines = async () => {
        axios.get('http://localhost:7121/api/machine/getall')
        .then(response => {
            console.log(response.data)
            if (response.data !== null) {
                setMachines(response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })

    }

    useEffect(() => {          
            fetchMachines();
    },[])

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        
        console.log(`Update machine with ID: ${id}`);
        localStorage.setItem("machineId", id);
        navigate("/machine/update")
        

      };
    
      const handleCreatePlan = (id) => {
        
        console.log(`Create plan for machine with ID: ${id}`);
        navigate("/plan/create")
      };
  

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
              <h2>Machines</h2>
              <div className="table-responsive">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Producted Parts</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  {machines.map((machine) => (
                  <tr key={machine.id}>
                    <td>{machine.id}</td>
                    <td>{machine.name}</td>
                    <td>{machine.productedParts}</td>
                    <td>{machine.status}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdate(machine.id)}
                      >
                        Update
                      </button></td>
                      <td><button
                        className="btn btn-success ml-2"
                        onClick={() => handleCreatePlan(machine.id)}
                      >
                        Create Plan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachinesPage;






