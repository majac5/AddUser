import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';
import {useState} from 'react';
import { Link } from "react-router-dom";

const UsersList = (props) => {

    const [users, setUsers] = useState([]);


    const handleDelete = async (id) => {
        const filterd = users.filter((user) => user.id !== id);
        setUsers(filterd);
        localStorage.setItem("users", JSON.stringify(filterd));
      };



    return(
        <Card className={classes.users}>
        <ul>
        {props.users?.map((user) => (
                <li key={user.id}>
                <Link to="aboutuser" >{user.name} ({user.age} years old)</Link>
                    <img src="https://i.ibb.co/PNCTCTg/download.png" alt="edit icon"></img>
                  <a href="/" onClick={() => handleDelete(user.id)}><img src='https://i.ibb.co/WnSvKpj/icon.png' alt="delete icon"></img></a>
                </li>
            ))}
            
        </ul>
        </Card>
    );
}

export default UsersList;