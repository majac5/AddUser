import {useState, useEffect} from 'react';
import "./ExistingUsers.css";

const ExistingUsers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      setData(data.data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Fetchani useri</h1> 
      
      {data?.map((el) => {
        return <>
        <table>
            <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
            </tr>
            <tr>
            <td>{el.id}</td>
            <td>{el.first_name}</td>
            <td>{el.last_name}</td>
            <td>{el.avatar}</td>
            </tr>
        </table>
        </>;
      })}
    </div>
  );
};

export default ExistingUsers;
