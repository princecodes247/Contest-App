import React, { useState } from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";
import img1 from "../assets/wave.svg";
import img2 from "../assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg";
import FileBase64 from 'react-file-base64';
import ContestItem from "./contestItem";
const Profile = () => {
	

	const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [password, setPassword] = useState("");
  const [passwordAlert, setPasswordAlert] = useState({text:"", class: "red-text"});
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
	const handleChange = (e) => {
		setUsername(e.target.value);
	};
	const handleChange2 = (e) => {
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
			  <h1> Profile </h1>
        <div className="sect--row">
          <div className="profile-pic-input profile-adjust">
                <span className="profile-cover">
                <div className="image-cropper profile-pic-cont" style={{background: `url(${profilePic}) no-repeat 50% 50%`}}>
                {/* <img className="profile-pic" src={profilePic} /> */}
                </div>
                <label className="file-input">
                <FileBase64 multiple={false} onDone={handleProfilePic}/>
                </label>
                </span>
            </div>
				  <div className="profile-info">
          <h2>Peter{fullName}</h2>
          <p className="profile-username">@{username}</p>
          <p>tasker@gmail.com</p>
          </div>
        </div>
           <div>
            <h2 className="pad1">Participating in</h2>
            <div className="sect--col contests">
              <ContestItem contestName="SAmmy Loaded" contestCreator="Samuel" contestPic={profilePic} launchDate="1652050800000" voteCost="200" prizes={["1500","1000","200"]}/>
              <ContestItem contestName="SAmmy Loaded" contestCreator="Samuel" contestPic={profilePic} launchDate="1652050800000" voteCost="200" prizes={["1500","1000","200"]}/>
            </div>
           </div>
          
             <button>
              Sign Out
             </button>
			  
			  

			  {/* <p className="padding"> If you don't have an account, you can <Link to="/signup"> sign up here </Link></p> */}
			  <img className="box-wave" src={img1}/>
			</form>
    </React.Fragment>
  );
};

export default Profile;
