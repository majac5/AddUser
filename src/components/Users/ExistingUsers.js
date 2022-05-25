import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExistingUsers.css";

const ExistingUsers = () => {
  const [data, setData] = useState([]);
  // //reqres.in/api/users
  // jsonplaceholder.typicode.com / users;
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      setData(data.data);
    }
    getData();
  }, []);

  // Rjesenje kako sa JSONPlaceholder primjerima radit ili drugi nacin pisanja fetcha

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setData(json);
  //     });

  //   return () => {};
  // }, []);

  return (
    <div>
      <button>
        <Link to="/" style={{ color: "black" }}>
          Go home
        </Link>
      </button>
      <h1>Fetchani useri</h1>
      <table>
        <th>ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Avatar</th>
        {data?.map((el) => {
          return (
            <>
              <tr></tr>
              <tr>
                <td>{el.id}</td>
                <td>{el.first_name}</td>
                <td>{el.last_name}</td>
                <td>
                  <img
                    src={el.avatar}
                    alt={el.first_name}
                    style={{ borderRadius: "50%" }}
                  />
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default ExistingUsers;
