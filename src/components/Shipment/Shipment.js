import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  // console.log(user.email);s
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  // set signup info handle to use state
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handleNumberBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCrateUser = (event) => {
    event.preventDefault();
    const userEmail = user?.email;
    setEmail(userEmail);
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };

  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleCrateUser} action="">
          <h1 className="form-title">Shipping Information</h1>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email ">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handleNumberBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Add shipping" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Please login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Shipment;
