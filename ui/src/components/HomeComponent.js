import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useTable } from "react-table";
import Table from "react-bootstrap/Table";
function Home() {
    // The first is variable, the 2nd is a
    const [animals, setanimals] = useState([]);

    // useEffect(() => {
    // const search = () => {
    //   var axios = require("axios");
    //   let endpoint = "/all";
    //   let params = {};
    //   let headers = {};

    //   if (firstName != "" || lastName != "") {
    //     endpoint = "/searchName";
    //     console.log("searching");
    //     params = {
    //       firstName: firstName,
    //       lastName: lastName,
    //     };
    //   }

    //   var config = {
    //     method: "get",
    //     url: "http://localhost:8080/user-management" + endpoint,
    //     params: params,
    //     headers: headers,
    //   };

    //   console.log(config);

    //   axios(config)
    //     .then(function (response) {
    //       console.log(JSON.stringify(response.data));
    //       setUsers(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };

    // Temporary data
    const data = React.useMemo(
        () => [
            {
                name: "Max",
                type: "Dog",
                id: "01",
                status: "Available",
                admin: "None",
                instructor: "None",
                profile: "link to animal",
            },
            {
                name: "Rex",
                type: "Cat",
                id: "02",
                status: "Active",
                admin: "Alex Leakos",
                instructor: "Michael Ah",
                profile: "link to animal",
            },
        ],
        []
    );

    // Columns (pretty sure this can be hard coded, but need to load data for data part)
    const columns = React.useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name", // accessor is the "key" in the data
            },
            {
                Header: "Animal type",
                accessor: "type",
            },
            {
                Header: "Animal ID",
                accessor: "id",
            },
            {
                Header: "Status",
                accessor: "status",
            },
            {
                Header: "Admin Approval",
                accessor: "admin",
            },
            {
                Header: "Instructor Approval",
                accessor: "instructor",
            },
            {
                Header: "Profile",
                accessor: "profile",
            },
        ],
        []
    );

    // Create table
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <Container>
            <Table
                striped
                bordered
                hover
                {...getTableProps()}
                style={{ border: "solid 1px blue" }}
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: "solid 3px red",
                                        background: "aliceblue",
                                        color: "black",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: "10px",
                                                border: "solid 1px gray",
                                                background: "papayawhip",
                                            }}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
}
export default Home;
