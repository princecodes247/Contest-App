import React from 'react';
import { Link } from "react-router-dom";
import contestImg from '../assets/raphael-lovaski-xQSim-3LgCQ-unsplash.jpg'

const ContestBox = ({ contestName, cashPrize, startDate }) => {
// Contest images are to be loaded from a asourc but for now its hard-coded as well
    return (
        <React.Fragment>
              <div className="contest-box column-switch">
                <div className="contest-img full-length-m2">
                    <img src={contestImg}/>
                      </div>
                      <div className="contest-text full-length">
                          <h1> {contestName} </h1>
                        <div className="contest-info"><span> <h4>Start Date</h4> <p> {startDate}</p></span>
                          <span> <h4>Cash Prize</h4> <p> {`$${cashPrize}`}</p></span></div>  
                          <button> <Link to={`/contest-details/${contestName}/${cashPrize}/${startDate}`}>Enter Now</Link> <i className="fa fa-door"></i> </button>

                      </div >
              </div>
        </React.Fragment>
      );
}
 
export default ContestBox;