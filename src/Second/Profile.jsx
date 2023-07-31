import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Profile.css";
///////////////image/////////////////////////////
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Space } from "antd";
import map from "./map.png";
////////////redux//////////////////////////
import { useDispatch, useSelector } from "react-redux";
import { userFetchThunk } from "../store/features/sellerSlice";

function Profile() {
  const { data, status } = useSelector((state) => state.emp);

  const dispatch = useDispatch();
  console.log("This is  profile", data);

  useEffect(() => {
    dispatch(userFetchThunk());
  }, []);

  const person = { ...data[1], ...data[2] };
  return (
    <div className="bodyy" style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        <div id="navbar">
          <div id="navbar-brand">
            <a href="#">MyWebsite</a>
          </div>
          <nav>
            <ul>
              <div style={{ display: "inline" }}>
                <li className="contact">
                  <Col xs={6} md={4}>
                    <Image
                      src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                      height={"100vh"}
                      roundedCircle
                    />
                  </Col>
                  <a href="#">Leanne Graham</a>
                </li>
              </div>
            </ul>
          </nav>
          <hr />
        </div>
        <div style={{ display: "flex", gap: "30vh", padding: "6vh" }}>
          <div>
            <Container>
              <Col xs={6} md={4}>
                <Image
                  src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
                  roundedCircle
                  style={{height:"5vh"}}               
                />
              </Col>
            </Container>
            <Space direction="vertical" size={16}>
              <div style={{ alignItems: "center" }}>
                <h2 style={{ color: "23px solid gray", textAlign: "center" }}>
                  {person.name}
                </h2>
                <h4 style={{ color: "gray" }}>Username:{person.username}</h4>
                <h4 style={{ color: "gray" }}>email:{person.email}</h4>
                <h4 style={{ color: "gray" }}>Phone:{person.phone}</h4>
                <h4 style={{ color: "gray" }}>Website:{person.website}</h4>
              </div>
              <hr />
              <div style={{ alignItems: "center" }}>
                <h4 style={{ color: "gray", textAlign: "center" }}>Company</h4>
                <h4 style={{ color: "gray" }}>name:{person.name}</h4>
                <h4 style={{ color: "gray" }}>
                  catchPhrase:{person.catchPhrase}
                </h4>
                <h4 style={{ color: "gray" }}>bs:{person.bs}</h4>
              </div>
            </Space>
          </div>
          <div>
            <h4 style={{ color: "gray", textAlign: "center" }}>Address</h4>
            <h4 style={{ color: "gray" }}>suite:{person.suite}</h4>
            <h4 style={{ color: "gray" }}>city:{person.city}</h4>
            <h4 style={{ color: "gray" }}>zipcode:{person.zipcode}</h4>
            <h4 style={{ color: "gray" }}>street:{person.street}</h4>
            <div className="map">
              <img src={map} alt="" height='230vh' width='436vh' />
            </div>
            <h6 style={{ color: "gray",textAlign:"end" }}>lat:{person.lat}</h6>
            <h6 style={{ color: "gray",textAlign:"end" }}>lng:{person.lng}</h6>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div></div>
    </div>
  );
}

export default Profile;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Profile = () => {
// //   const [data, setData] = useState([]);

// //    async function abcd(e) {
// //     const apiUrl = 'https://panorbit.in/api/users.json';
// //     axios.get(apiUrl)
// //       .then(response => {
// //         setData(response.data); // Assuming the response.data is an array
// //       })
// //       .catch(error => {
// //         console.error('Error', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       {data.map(item => (
// //         <div key={item.id}>
// //           <p>{item.name}</p>

// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Profile;

// // import axios from "axios";
// // import { useState } from "react";

// // export default function App() {
// //   const [data, setData] = useState({});
// //   async function abcd(e) {
// //     e.preventDefault();
// //     let response = await axios.post("https://panorbit.in/api/users.json");

// //     console.log(response.data);
// //     setData(response.data);

// //     console.log("ssssssss", data);
// //   }

// //   return (
// //     <div className="App">
// //       <h1>Hello CodeSandbox</h1>
// //       <h2>Start editing to see some magic happen!</h2>
// //       <button onClick={(e) => abcd(e)}>click</button>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import "./Profile.css";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { userFetchThunk } from "../store/features/sellerSlice";

// function Profile() {
//   const [filterQuery, setFilterQuery] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // Define your API URL with the filter query as a query parameter
//     const apiUrl = `https://panorbit.in/api/users.json`;

//     // Fetch data from the API using Axios
//     axios
//       .get(apiUrl)
//       .then((response) => {
//         // Update the filteredData state with the data received from the server
//         setFilteredData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching filtered data:", error);
//       });
//   }, [filterQuery]); // Run this effect whenever filterQuery changes

//   const handleFilterChange = (event) => {
//     // Update the filterQuery state when the input value changes
//     setFilterQuery(event.target.value);
//   };

//   return (
//     <div className="bodyy" style={{ display: "flex" }}>
//       <div>
//         <Sidebar />
//       </div>
//       <div>
//         <div id="navbar">
//           <div id="navbar-brand">
//             <a href="#">Profile</a>
//           </div>
//           <nav>
//             <ul>
//               <div style={{ display: "inline" }}>
//                 <li className="contact">
//                   <Col xs={6} md={4}>
//                     <Image
//                       src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
//                       height={"100vh"}
//                       roundedCircle
//                     />
//                   </Col>
//                   <a href="#">Leanne Graham</a>
//                 </li>
//               </div>
//             </ul>
//           </nav>
//           <hr />
//         </div>
//         <div style={{ display: "flex", gap: "100vh", padding: "6vh" }}>
//           <div>
//             <Container>
//               <Col xs={6} md={4}>
//                 <Image
//                   src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
//                   roundedCircle
//                 />
//               </Col>
//             </Container>

//             <div>
//       <h1>Filtered Data</h1>
//       <ul>
//         {Array.isArray(filteredData)
//           ? filteredData.map((item) =><h1>{item.name}</h1> )
//           : null}
//       </ul>
//     </div>

//           </div>
//           <div>111111ndkhddjjikkkkkkk</div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <div></div>
//     </div>
//   );
// }

// export default Profile;
