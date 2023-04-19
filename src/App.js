import React, { useState, useEffect } from "react";
import "./index.css";
import "./sorting.js";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=3&results=10")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <table id="selectedColumn" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th class="th-sm">Full Name</th>
            <th class="th-sm">Username</th>
            <th class="th-sm">Thumbnail Icon</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>
                {user.name.title}. {user.name.first} {user.name.last}
              </td>
              <td>
                {user.login.username}
              </td>
              <td>
                {user.picture.thumbnail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
