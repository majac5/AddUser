import React, { useEffect } from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

const UsersList = (props) => {
  const [users, setUsers] = useState(Array.from(localStorage.getItem("users")));

  const handleDelete = (id) => {
    const filterd = props.users?.filter((user) => user.id !== id);
    setUsers(filterd);
    localStorage.setItem("users", JSON.stringify(filterd));
  };
  console.log(users?.filter((user) => user.id));
  return (
    <Card className={classes.users}>
      <ul>
        {props.users?.map((user) => (
          <li key={user.id}>
            <Link to="aboutuser">
              {user.name} ({user.age} years old)
            </Link>
            <img
              src="https://i.ibb.co/PNCTCTg/download.png"
              alt="edit icon"
            ></img>
            <a href="/" onClick={() => handleDelete(user.id)}>
              <img
                src="https://i.ibb.co/WnSvKpj/icon.png"
                alt="delete icon"
              ></img>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
