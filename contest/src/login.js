import React, { useState } from "react";
import "./styles/login.css";
import img1 from "./assets/wave.svg";



const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = (e) => {
		setUsername(e.target.value);
	};
	const handleChange2 = (e) => {
		setPassword(e.target.value);
	  };
  return (
    <React.Fragment>
		  <div className="container reduce-form">
			  <h1> Login </h1>
			  
			  <div className="input-field">
				  <h2> Username</h2>
				  <span> <i className="fa fa-user"></i>  <input type="text" placeholder=" Type your Username"  value={username}
            onChange={handleChange} /></span>
				  <h2> Password</h2>
				  <span> <i className="fa fa-lock"></i> <input type="password" placeholder=" Type your Password"  value={password}
            onChange={handleChange2}/> </span>
			</div>

			  
			  <button> Login </button>

			  <p className="padding"> If you don't have an account, you can <a href="/signup"> sign up here </a></p>
			  <img className="box-wave" src={img1}/>
			</div>
    </React.Fragment>
  );
};

export default Login;
