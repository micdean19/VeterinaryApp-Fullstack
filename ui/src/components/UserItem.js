import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserItem = ({ user, onUserSelect }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.accessLevel}</td>
      <td>
        <Button onClick={() => onUserSelect(user)}>SOME BUTTON</Button>
      </td>
    </tr>
  );

  // <div onClick={() => onUserSelect(user)}>
  //   <div className="content">User ITEM</div>
  // </div>
  //   );
};

export default UserItem;
