import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
////////////redux//////////////////////////
import { useDispatch, useSelector } from "react-redux";
import { userFetchThunk } from "../store/features/sellerSlice";

function Profile() {
  const { data, status } = useSelector((state) => state.emp);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchThunk());
  }, []);

  return (
    <div style={{ display: "flex", color: "red" }}>
      <div >
        <Sidebar />
      </div>
      <div>
        <h1 style={{color:"red"}}>Name:{data.address}</h1>
        <h1>{data.id}</h1>

      </div>
    </div>
  );
}

export default Profile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [data, setData] = useState([]);

//    async function abcd(e) {
//     const apiUrl = 'https://panorbit.in/api/users.json';
//     axios.get(apiUrl)
//       .then(response => {
//         setData(response.data); // Assuming the response.data is an array
//       })
//       .catch(error => {
//         console.error('Error', error);
//       });
//   }, []);

//   return (
//     <div>
//       {data.map(item => (
//         <div key={item.id}>
//           <p>{item.name}</p>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default Profile;

// import axios from "axios";
// import { useState } from "react";

// export default function App() {
//   const [data, setData] = useState({});
//   async function abcd(e) {
//     e.preventDefault();
//     let response = await axios.post("https://panorbit.in/api/users.json");

//     console.log(response.data);
//     setData(response.data);

//     console.log("ssssssss", data);
//   }

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={(e) => abcd(e)}>click</button>
//     </div>
//   );
// }
