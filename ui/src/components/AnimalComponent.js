import React, { useState, useEffect } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AnimalHome from "./AnimalProfile/AnimalHome";
import AnimalHistory from "./AnimalProfile/AnimalHistory";
import Discussion from "./AnimalProfile/DiscussionBoard";

const Animal = (props) => {
    const [animal, setAnimal] = useState(null);
    const animalId = props.location.pathname.split("/").pop();

    useEffect(() => {
        const search = () => {
            var axios = require("axios");
            let params = {
                AnimalID: animalId,
            };
            let headers = {};

            var config = {
                method: "get",
                url: "http://localhost:8080/animal-management",
                params: params,
                headers: headers,
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data);
                    // console.log(JSON.stringify(response.data));
                    setAnimal(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        search();
    }, []);

    const imgStyle = {
        // width: "450px",
        // height: "auto",
        maxHeight: "450px",
        width: "auto",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    };
    const positionRow = {
        height: "68vh",
        marginTop: "4rem",
        marginBottom: "4rem",
    };

    const tableheader = {
        width: "25%",
    };

    if (animal === null) {
        return <div>Loading...</div>;
    } else {
        return (
            // <Container>
            <React.Fragment>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="profile" title="Profile">
                        <AnimalHome animal={animal} setAnimal={setAnimal} />
                    </Tab>
                    <Tab eventKey="history" title="History">
                        <AnimalHistory animal={animal} setAnimal={setAnimal} />
                    </Tab>

                    {/* disable if student? */}
                    <Tab eventKey="discussion" title="Discussion">
                        <Discussion animal={animal} />
                    </Tab>
                </Tabs>
            </React.Fragment>
            // </Container>
        );
    }
};

export default Animal;
