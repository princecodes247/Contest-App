import React, { useState } from "react";
import "../styles/login.css";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import img1 from "../assets/wave.svg";
import img2 from "../assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg";
import FileBase64 from 'react-file-base64';

const Profile = () => {
	

	const [username, setUsername] = useState("");
  const [usernameConfirmation, setUsernameConfirmation] = useState("");
  const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [password, setPassword] = useState("");
  const [passwordAlert, setPasswordAlert] = useState({text:"", class: "red-text"});
  const [usernameAlert, setUsernameAlert] = useState({text:"", class: "red-text"});
  const [emailAlert, setEmailAlert] = useState({text:"", class: "red-text"});
  const [profilePic, setProfilePic] = useState("");


    const checkPasswords = () => {
      if(password == "" && newPassword == "") {
        setPasswordAlert({text:"", class: "red-text"})
      }
      if (password == newPassword) {
        setPasswordAlert({text:"Passwords match", class: "green-text"})
      } else {
        setPasswordAlert({text:"Passwords do not match", class: "red-text"})
      }
    }
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	  };
    const handleChange3 = (e) => {
      setPassword(e.target.value);
      checkPasswords()
      };
      const handleChange4 = (e) => {
        setNewPassword(e.target.value);
        checkPasswords()
        };
	const handleSubmit = async e => {
		e.preventDefault();
	
	  }
      const handleProfilePic = async e => {
          console.log(e);
        setProfilePic(e.base64)
      }
  return (
    <React.Fragment>
		  <form onSubmit={handleSubmit} className="container reduce-form">
			  <h1> Settings </h1>
            <div class="profile-pic-input profile-adjust">
                <span className="profile-cover">
                <div className="image-cropper profile-pic-cont" style={{background: `url(${profilePic}) no-repeat 50% 50%`}}>
                {/* <img className="profile-pic" src={profilePic} /> */}
                </div>
                </span>
                <div className="profile-pic-btns">
                <label className="file-input">
                <FileBase64 multiple={false} onDone={handleProfilePic}/>
                </label>
                <button className="save-btn">Save Picture</button>
                </div>
            </div>
                <div className="input-field">
				  <h2> Change Username</h2>
				  <span> <i className="fa fa-user"></i>  <input type="text" placeholder=" Type your Username"  value={username}
                    onChange={handleUsernameChange} /></span>
                    	  <span> <i className="fa fa-lock"></i> <input type="password" placeholder=" Enter Password for Confirmation"  value={password}
            onChange={handleChange3}/> </span>
                    {/* USERNAME CHANGED ALERT */}

                    <p className={usernameAlert.class}>{usernameAlert.text}</p>
            <button className="save-btn">Save Username</button>
            </div>
            <div className="input-field">
            <h2> Change Email Address</h2>
            <span> <i className="fa fa-user"></i>  <input type="text" placeholder=" Type your Email"  value={email}
            onChange={handleEmailChange} /></span>
            	  <span> <i className="fa fa-lock"></i> <input type="password" placeholder=" Enter Password for Confirmation"  value={password}
            onChange={handleChange3}/> </span>
            {/* EMAIL CHANGED ALERT */}
            <p className={emailAlert.class}>{emailAlert.text}</p>
            <button className="save-btn">Save Email</button>
            </div>
            <div className="input-field">
				  <h2> Change Password</h2>
				  <span> <i className="fa fa-lock"></i> <input type="password" placeholder=" Old Password"  value={password}
            onChange={handleChange3}/> </span>
            <span> <i className="fa fa-lock"></i> <input type="password" placeholder=" New Password"  value={newPassword}
            onChange={handleChange4}/> </span>
            <p className={passwordAlert.class}>{passwordAlert.text}</p>
            <button className="save-btn">Save Password</button>
                </div>
            
			

			  
			  

			  {/* <p className="padding"> If you don't have an account, you can <Link to="/signup"> sign up here </Link></p> */}
			  <img className="box-wave" src={img1}/>
			</form>
    </React.Fragment>
  );
};

export default Profile;
