import { Link } from "react-router-dom";
import "./AboutUser.css";

const AboutUser = (props) => {
  return (
    <>
      <h1>User</h1>
      <nav>
        <Link to="/">Go home</Link>
      </nav>
      <label>Name</label>
      <input></input>
      <br />
      <label>Age</label>
      <input></input>
    </>
  );
};

export default AboutUser;
