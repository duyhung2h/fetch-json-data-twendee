import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Full Name",
    selector: (row) => row.fullname,
    cell: (row) => row.fullname,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.username,
    cell: (row) => row.username,
    sortable: true,
  },
  {
    name: "Thumbnail Icon",
    selector: (row) => (
      <img src={row.thumbnail} width={50} alt={row.thumbnail}></img>
    ),
  },
];
export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);

  const fetchData = async (page, per_page) => {
    fetch("https://randomuser.me/api/?page=" + page + "&results=" + per_page)
      .then((response) => response.json())
      .then(
        (data) => {
          let userListPending = [];
          data.results.forEach((user, index) => {
            userListPending.push({
              fullname:
                user.name.title + ". " + user.name.first + " " + user.name.last,
              username: user.login.username,
              thumbnail: user.picture.thumbnail,
            });
          });
          setUserList(userListPending);
          setIsLoaded(true);
          setTotalRows(100);
          console.log(userListPending);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page, perPage);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    fetchData(page, newPerPage);
  };

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleSort = async () => {
    await sleep(1);
    handlePageChange(currentPage);
  };

  useEffect(() => {
    fetchData(currentPage, perPage);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <DataTable
          columns={columns}
          data={userList}
          pagination
          paginationServer={true}
          paginationTotalRows={totalRows}
          onChangePage={handlePageChange}
          onSort={handleSort}
          onChangeRowsPerPage={handlePerRowsChange}
          paginationDefaultPage={currentPage}
          paginationResetDefaultPage={false}
        />
      </div>
    );
  }
}
