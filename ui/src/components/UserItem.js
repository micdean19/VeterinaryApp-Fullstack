import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import UserManagement from "./UserModal";

const UserItem = ({ user, setSelectedUser }) => {
  const [show, setShow] = useState(false);

  const ButtonClick = () => {
    setSelectedUser(user);
    setShow(true);
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
        {show ? (
          <UserManagement user={user} show={show} setShow={setShow} />
        ) : null}
      </td>
    </tr>
  );
};

export default UserItem;
