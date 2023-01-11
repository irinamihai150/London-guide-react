import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

// const getFilteredNames = (query, names) => {
//   return sortedInfo.names.filter((el) => !query || el.name.includes(query));
// };

function InfoDetails({ selectedButton, city }) {
  const [info, setInfo] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
        setErrorMessage("Unable to fetch data from server");
      });
    setIsLoading(false);
  }, [selectedButton, city]);
  console.log(info);
  info.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
//   console.log(info.names);
//   let info2 = Object.keys(info);
// let filtered=  info2.filter((key) => key.includes("NAME"))
// console.log(filtered)
//   console.log(info2);
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
