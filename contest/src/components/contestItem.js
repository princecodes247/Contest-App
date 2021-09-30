import React from 'react';
import { Link } from "react-router-dom";
const ContestItem = ({ contestName, contestPic, contestCreator, launchDate, voteCost, prizes=["0","1","2"]}) => {
  
    const handleLeaveBtnClick = e => {
      e.stopPropagation();
    }
    return (
        <React.Fragment>

        <Link to="/contests">
          <div className="contests__item">
          
                
            <div className="image-cropper profile-pic-cont contests__pic">
            <img className="profile-pic" src={contestPic} />
            </div>
           
                
            
            <div className="contests__info">
            <h3>{contestName}</h3>
            <h6>By {contestCreator}</h6>
            <span className="sect--row contests__details">
            <p>{launchDate}</p>
            <p>Vote Cost: {voteCost}</p>
            </span>
            <span className=" sect--row contests__prizes">
            <p>Prizes:</p>
            <p>{prizes[0]}</p>
            <p>{prizes[1]}</p>
            <p>{prizes[2]}</p>
            </span>
            </div>
            <button onClick={handleLeaveBtnClick} className="leave-btn">
              Leave Contest
            </button>
          </div>
        </Link>
  </React.Fragment>
  );
}

export default ContestItem;