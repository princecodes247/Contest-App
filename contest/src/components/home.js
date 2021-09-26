import React from "react";
import Header from "./header";
import img1 from "../assets/zhanarys-dakhiyev-WMlRkqt1vII-unsplash.jpg";
import img2 from "../assets/sigmund-jzz_3jWMzHA-unsplash.jpg";
import img3 from "../assets/radu-florin-4_QFycgpC4c-unsplash.jpg";
import img4 from "../assets/raphael-lovaski-xQSim-3LgCQ-unsplash.jpg";
import img5 from "../assets/undraw_skateboard_d6or.svg";


const Home = () => {
  return (
    <React.Fragment>
      <Header/>
<div class="hero">
<div class="hero-intro full-length">
  <h1 className="reduce-size">Take your talent, influence & brand to the international stage</h1>
  <p className="reduce-p-size">
    With the best judges in their area of expertise on every competition.
    Meet your match and make your mark on the global community 24/7.
  </p>
  <span
    ><button class="enter"> <a className="reduce-p-size" href="/contest">Enter a Contest</a></button>
    <button class="sponsor"> <a className="reduce-p-size" href="/buy-votes">Cast your Votes</a></button></span
  >
</div>
</div>

<div class="contest-showcase column-switch">
<div class="write-up full-length-m">
  <h1>Contests</h1>
  <h2 class="intro">Win Cash and Career Prizes</h2>
  <p>
    Every contest is an opportunity for you to be seen by showcasing your
    talent to millions of people.
  </p>
  <ul>
    <li>Join different contests</li>
    <li>Collect votes from your fans</li>
    <li>Win cash and career prizes</li>
  </ul>

  <button>Explore More <i class="fa fa-arrow-circle-right"></i></button>
</div>
<div class="contest-showcase-imgs full-length-m">
 <div class="img1 full-length-img"> <h3> Make-Up </h3></div>
 <div class="img2 full-length-img"><h3>Fitness</h3> </div>
 <div class="img3 full-length-img"> <h3>Photography</h3></div>
 <div class="img4 full-length-img"> <h3>Music</h3> </div>
</div>
</div>

<div class="contest-sponsors">
<h1>Previous Contests Sponsors and Judges</h1>
<div class="center-grid space-between ">
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img1} />
    </div>
    <h3>Miles Morales</h3>
    <p>UI/UX Designer</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img2} />
    </div>
    <h3>John Camwood</h3>
    <p>Poject Manager</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img1} />
    </div>
    <h3>Miles Morales</h3>
    <p>UI/UX Designer</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img2} />
    </div>
    <h3>John Camwood</h3>
    <p>Poject Manager</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img2} />
    </div>
    <h3>John Camwood</h3>
    <p>Poject Manager</p>
  </div>
</div>

<div class="center-grid space-between">
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img1} />
    </div>
    <h3>Miles Morales</h3>
    <p>UI/UX Designer</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img2} />
    </div>
    <h3>John Camwood</h3>
    <p>Poject Manager</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img1} />
    </div>
    <h3>Miles Morales</h3>
    <p>UI/UX Designer</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img2} />
    </div>
    <h3>John Camwood</h3>
    <p>Poject Manager</p>
  </div>
</div>

<div class="center-grid space-between ">
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img1} />
    </div>
    <h3>Miles Morales</h3>
    <p>UI/UX Designer</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img2} />
    </div>
    <h3>John Camwood</h3>
    <p>Poject Manager</p>
  </div>
  <div class="profile profile-adjust">
    <div class="image-cropper profile-reduce">
      <img src={img1} />
    </div>
    <h3>Miles Morales</h3>
    <p>UI/UX Designer</p>
  </div>
</div>
</div>

<h1 class="heading"> Previous Winners </h1>
<div class="previous-winners space-between">

  <div class="profile profile-adjust">
      <div class="image-cropper profile-reduce">
        <img src={img1} />
      </div>
      <h3>2016 Winner</h3>
      <p> Fine & Applied Art</p>
    </div>
    <div class="profile profile-adjust">
      <div class="image-cropper profile-reduce">
        <img src={img2} />
      </div>
      <h3>2020 Winner</h3>
      <p>Mens' Fitness</p>
    </div>
    <div class="profile profile-adjust">
      <div class="image-cropper profile-reduce">
        <img src={img3} />
      </div>
      <h3>2015 Winner</h3>
      <p>Photography</p>
    </div>
    <div class="profile profile-adjust">
      <div class="image-cropper profile-reduce">
        <img src={img4} />
      </div>
      <h3>2018 Winner</h3>
      <p>Make-Up Artistry</p>
    </div>
</div>
<div class="banner">
  <div class="banner-text full-length">
     <h2 className="reduce-size"> Get Discovered & Achieve More! </h2> 
     <button> Sign up to our newsletter </button>
  </div>
 <div class="svg hidden-sm hidden-md"><img src={img5}/></div> 
</div>
    </React.Fragment>
  );
};

export default Home;
