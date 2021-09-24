import React from "react";
import img1 from "./assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg";
import Header from './header';
import './styles/contest.css';



const ContestDetails = () => {
  return (
    <React.Fragment>
      <Header/>
              <div className="contest-details-hero full-length-m2"></div>

          <div className="contest-details-box"> <div className="contest-details-text full-length-m3 column-switch">
                          <h1> Puppet Killer Monologue Contest </h1>
                        <div className="contest-info info-adjust full-length-m"><span className="no-margin" > <h4 >Start Date</h4> <p> Oct 26</p></span>
                  <span> <h4>Cash Prize</h4> <p> $100,000</p></span></div></div>
              <hr></hr>
                  </div>
                     
              
          <div className="contest-description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, fugiat? Et, placeat quos magni sit provident blanditiis. Nesciunt provident perferendis dolor! Odit sequi sint perferendis quo quam excepturi ad, veritatis, obcaecati natus porro sapiente, tenetur culpa.</p>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae aut similique quas saepe corporis quis dolore laborum doloribus delectus.</p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quibusdam?</p>
              
    <h4 className="contest-cost">Cost Per Vote : <b> N200</b></h4>
          </div>

          <div className="contest-details-btn">
              <button> <a href="/login">Login to Participate <i className="fas fa-person"></i></a></button>
              <button className="pay-btn"> <a href="/buy-votes"> Pay for Votes </a> <i class="fa fa-arrow-circle-right"></i></button>
          </div>

          
              
      
    </React.Fragment>
  );
};

export default ContestDetails;
