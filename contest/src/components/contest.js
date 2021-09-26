import React from "react";
import ContestBox from "./contestBox";
import Header from './header';
import '../styles/contest.css';



const Contest = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="contest-hero">
       <span><h1> Contests</h1>
        <p> Showcase your talents <br/> Collect Votes from Fans <br/> Win exclusive prizes </p></span> 
              </div>

      <div className="contest-list">
        <ContestBox contestName="Dance Fever Contest" startDate="Oct 26" cashPrize="250,000" />
        <ContestBox contestName="Puppet Killer Monologue Contest" startDate="Nov 10" cashPrize="350,000" />
        <ContestBox contestName="Next Mic Lyrical Contest" startDate="Dec 15" cashPrize="150,000" />
        <ContestBox contestName="Ultimate Shot Photography Contest" startDate="Oct 25" cashPrize="50,000"/>
        </div>
                
      
    </React.Fragment>
  );
};

export default Contest;
