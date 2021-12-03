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
    // The first is variable, the 2nd is a method to set
    const [animals, setanimals] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [name, setname] = useState("");
    useEffect(() => {
        const search = () => {
            var axios = require("axios");
            // fix endpoint from backend
            let endpoint = "/animal-management/all";
            let params = {};
            let headers = {};

            var config = {
                method: "get",
                url: "http://localhost:8080" + endpoint,
                params: params,
                headers: headers,
            };

            console.log(config);

            axios(config)
                .then(function (response) {
                    // Check if incoming matches format of table
                    console.log(JSON.stringify(response.data));
                    setanimals(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        // Waiting wait every 500 ms or until user stops typing
        const id = setTimeout(() => {
            if (name) {
                search();
            } else {
                console.log("searching on interval");
                search();
            }
        }, 500);

        // the only thing you can return is a function in a useEffect
        // runs when the component unmounts OR at the start of a new render
        // this is why we see the function run at the beginning of the render
        // use this to clean up our timer
        return () => {
            clearTimeout(id);
        };
        // This is saying, whenever name change, run this again
    }, [name]);

    // Temporary data
    // const data = React.useMemo(animals);
    const data = animals;

    // Columns (pretty sure this can be hard coded, but need to load data for data part)
    const columns = React.useMemo(
        () => [
            {
                Header: "Animal ID",
                accessor: "animalId",
            },
            {
                Header: "Name",
                accessor: "name", // accessor is the "key" in the data
            },
            {
                Header: "Animal type",
                accessor: "animalType",
            },

            {
                Header: "Status",
                accessor: "status",
            },
            {
                Header: "Admin Approval",
                accessor: "adminStatus",
            },
            {
                Header: "Technician Approval",
                accessor: "technicianStatus",
            },
            {
                Header: "Breed",
                accessor: "breed",
            },
            {
                Header: "Date of Birth",
                accessor: "dob",
            },
            {
                Header: "Health Status",
                accessor: "healthStatus",
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
