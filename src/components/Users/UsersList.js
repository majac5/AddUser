import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';
import {useState} from 'react';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";

const UsersList = (props) => {

    
    const [list, setList] = useState([]);

    const handleRemove = (id) => {
        const newList = list.filter((user) => user.id !== id);
        setList(newList);
    }

    console.log(list);

    return(
        <Card className={classes.users}>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                   <Link to="/EditUsers">{user.name} ({user.age} years old)</Link>
                    <img src="https://i.ibb.co/PNCTCTg/download.png" alt="edit icon"></img>
                  <a href="#" onClick={() => handleRemove(user.id)}><img src='https://i.ibb.co/WnSvKpj/icon.png' alt="delete icon"></img></a>
                </li>
            ))}
            
        </ul>
        </Card>
    );
}

export default UsersList;