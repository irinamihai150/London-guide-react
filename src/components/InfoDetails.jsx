import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function InfoDetails({ selectedButton, city }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(`https://london-express.onrender.com/${selectedButton}/${city}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })

      .then((info) => setInfo(info))
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [selectedButton, city]);
  console.log(info);
  return (
    <div>
      <Table striped bordered hover responsive className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Website</th>
            <th>Phone</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          {info.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.website}</td>
                <td>{i.phone}</td>
                <td>{i.address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default InfoDetails;
