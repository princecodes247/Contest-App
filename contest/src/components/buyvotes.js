import React, { useState } from "react";
import Header from "./header";
import "../styles/votes.css";

const BuyVotes = () => {

// Values for the cost per vote, the contests and contest-participants are to be gotten via an axios fetch  but they are hardcoded for now
  const [costPerVote, setCostPerVote] = useState(200);
  const [votesNumber, setVotesNumber] = useState(0);
	const [totalVotes, setTotalVotes] = useState(0);

	const handleChange = (e) => {
		setTotalVotes(e.target.value);
	};
	const handleChange2 = (e) => {
    setVotesNumber(e.target.value);
    setTotalVotes(e.target.value * costPerVote);
	  };
  return (
    <React.Fragment>
      <Header />
      <div className="vote-form reduce-form">
        <span className="votes-box">
          <h2> Choose contest you wish to vote for</h2>

          <select>
          {/* {contests.map((contest) => (
          <option value={contest}> {contest} </option>
        ))} */}
            <option value="Dancing Competition"> Dancing Competition </option>
            <option value="Music Competition">Music Competition</option>
            <option value="Fitness Competition">Fitness Competition</option>
            <option value="Photography Competition">Photography Competition</option>
          </select>
        </span>
        <span className="votes-box">
          <h2> Choose a Contestant </h2>

          <select>
             {/* {contestant.map((contestant) => (
          <option value={contestant}> {contestant} </option>
        ))} */}
            <option value="Jin Mori"> Jin Mori </option>
            <option value="Yoo Mira">Yoo Mira</option>
            <option value="Han Daewi">Han Daewi</option>
            <option value="Park Muboong">Park Muboong</option>
          </select>
        </span>
        <span className="same-row column-switch">
        <span className="votes-box full-length-m4">
          <h2>Number of Votes</h2>
            <input type="number" value={votesNumber} onChange={handleChange2}/>
        </span>
        <span className="votes-box full-length-m4">
          <h2> Cost Per Vote</h2>

            <input type="disabled" value={`NGN ${costPerVote}`}/>
        </span>
        </span>
        <span className="same-row column-switch"><span className="votes-box full-length-m4">
          <h2> Amount of Total Votes </h2>

          <input type="disabled" value={`NGN ${totalVotes}`} onChange={handleChange}/>
         
        </span>
        <span className="votes-box full-length-m4">
          <h2>Phone Number </h2>
            <input type="number"/>
        </span></span>
        

        <button> Submit </button>
      </div>
    </React.Fragment>
  );
};

export default BuyVotes;
