import { Link } from "react-router-dom";
import classes from "./EditUsers.module.css";
import Card from "../UI/Card";

const EditUsers = (props) => {
    return (
        <>
        <Card className={classes.input}>
        <h1>Edit User</h1>
        <form>
        <label>Name</label>
        <input type="text"/>
        <label>Age</label>
        <input type="number" />
        <button type="submit">Save change</button>
        </form>
        <Link to="/">Go home</Link>
        </Card>
        </>
    );
}

export default EditUsers;