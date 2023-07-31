import React, { useEffect } from "react";
import "./Font.css";
import { useDispatch, useSelector } from "react-redux";
import { userFetchThunk } from "../store/features/sellerSlice";
import { Link } from "react-router-dom";

function FrontePage() {
  const { data, status } = useSelector((state) => state.emp);

  const dispatch = useDispatch();
  console.log("This is data in profile", data);
  useEffect(() => {
    dispatch(userFetchThunk());
  }, []);
  return (
    <div
      style={{ background: "file:///C:/Users/ankita/Downloads/wave%20(3).svg" }}
    >
      <div className="login-box">
        <h1>Select an account</h1>
        <div className="text-box">
          {data.map((item, index) => {
            return (
              <div className="mainDiv">
                <Link to="/profile">
                  {" "}
                  <img
                    className="image"
                    src={item.profilepicture}
                    alt=""
                  />{" "}
                </Link>{" "}
                <h5>{item.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FrontePage;
