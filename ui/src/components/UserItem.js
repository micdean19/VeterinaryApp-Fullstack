import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserItem = ({ user, setSelectedUser }) => {
  const ButtonClick = () => {
    setSelectedUser(user);
    console.log("UserItem: ", user);
  };

  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.accessLevel}</td>
      <td>
        <Button onClick={ButtonClick}>SOME BUTTON</Button>
      </td>
    </tr>
  );
};

export default UserItem;
