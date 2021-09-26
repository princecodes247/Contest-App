import React from "react";
import Header from './header';
import { Link } from "react-router-dom";
import '../styles/contest.css';
import contestImg from '../assets/raphael-lovaski-xQSim-3LgCQ-unsplash.jpg'




const ContestDetails = (props) => {
// Content for the description and costPerVote cannot be passed via URL so they would be populated via an axios fetch but they are hard-coded for now
// Contest images are to be loaded from a source but for now its hard-coded as well

  const contestName = props.match.params.contestName
  const contestPrize = props.match.params.contestPrize
  const contestDate = props.match.params.contestDate

  return (
    <React.Fragment>
      <Header/>
      <div className="contest-details-hero full-length-m2">
      <img src={contestImg}/>
              </div>

          <div className="contest-details-box"> <div className="contest-details-text full-length-m3 column-switch">
                          <h1> {contestName} </h1>
                        <div className="contest-info info-adjust full-length-m"><span className="no-margin" > <h4 >Start Date</h4> <p>{contestDate}</p></span>
                  <span> <h4>Cash Prize</h4> <p> {`$${contestPrize}`}</p></span></div></div>
              <hr></hr>
                  </div>
                     
              
          <div className="contest-description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, fugiat? Et, placeat quos magni sit provident blanditiis. Nesciunt provident perferendis dolor! Odit sequi sint perferendis quo quam excepturi ad, veritatis, obcaecati natus porro sapiente, tenetur culpa.</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae aut similique quas saepe corporis quis dolore laborum doloribus delectus.</p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quibusdam?</p>
              
    <h4 className="contest-cost">Cost Per Vote : <b> N200</b></h4>
          </div>

          <div className="contest-details-btn">
              <button> <Link to="/login">Login to Participate <i className="fas fa-person"></i></Link></button>
              <button className="pay-btn"> <Link to="/buy-votes"> Pay for Votes </Link> <i class="fa fa-arrow-circle-right"></i></button>
          </div>

          
              
      
    </React.Fragment>
  );
};

export default ContestDetails;
