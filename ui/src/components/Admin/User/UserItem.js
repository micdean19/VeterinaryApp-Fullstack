import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import UserManagement from "./UserModal";

const UserItem = ({ reRender, setReRender, user, setSelectedUser }) => {
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
      <td>
        {user.accessLevel.charAt(0) + user.accessLevel.slice(1).toLowerCase()}
      </td>
      <td>
        <Button onClick={ButtonClick}>Edit User</Button>
        {show ? (
          <UserManagement
            reRender={reRender}
            setReRender={setReRender}
            user={user}
            show={show}
            setShow={setShow}
          />
        ) : null}
      </td>
    </tr>
  );
};

export default UserItem;
