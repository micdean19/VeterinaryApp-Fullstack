import React from "react";
import UserItem from "./UserItem";
import Table from "react-bootstrap/Table";

const UserList = ({ users, onUserSelect }) => {
  const renderedList = users.map((user) => {
    return <UserItem onUserSelect={onUserSelect} user={user} />;
  });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Access Level</th>
          <th>Open Profile</th>
        </tr>
      </thead>
      <tbody> {renderedList}</tbody>
    </Table>
  );
};

export default UserList;
