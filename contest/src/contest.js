import React from "react";
import img1 from "./assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg";
import Header from './header';
import './styles/contest.css';



const Contest = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="contest-hero">
       <span><h1> Contests</h1>
        <p> Showcase your talents <br/> Collect Votes from Fans <br/> Win exclusive prizes </p></span> 
              </div>

              <div className="contest-list">
                  <div className="contest-box column-switch">
                      <div className="contest-img full-length-m2">
                      </div>
                      <div className="contest-text full-length">
                          <h1> Puppet Killer Monologue Contest </h1>
                        <div className="contest-info"><span> <h4>Start Date</h4> <p> Oct 26</p></span>
                          <span> <h4>Cash Prize</h4> <p> $100,000</p></span></div>  
                          <button> <a href="/contest-details">Enter Now</a> <i className="fa fa-door"></i> </button>

                      </div >
              </div>

              <div className="contest-box column-switch">
                      <div className="contest-img full-length-m2">
                      </div>
                      <div className="contest-text full-length">
                          <h1> Puppet Killer Monologue Contest </h1>
                        <div className="contest-info"><span> <h4>Start Date</h4> <p> Oct 26</p></span>
                          <span> <h4>Cash Prize</h4> <p> $100,000</p></span></div>  
                          <button><a href="/contest-details">Enter Now</a> </button>

                      </div >
        </div>
        
        <div className="contest-box column-switch">
                      <div className="contest-img full-length-m2">
                      </div>
                      <div className="contest-text full-length">
                          <h1> Puppet Killer Monologue Contest </h1>
                        <div className="contest-info"><span> <h4>Start Date</h4> <p> Oct 26</p></span>
                          <span> <h4>Cash Prize</h4> <p> $100,000</p></span></div>  
                          <button> <a href="/contest-details">Enter Now</a> </button>

                      </div >
              </div>
              </div>
      
    </React.Fragment>
  );
};

export default Contest;
