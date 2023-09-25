import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <div className="panel4">
        <div className="strailine"></div>
        <h3><center>Stay in the Loop</center></h3>
        <span><center>Join our mailing list to stay in the loop with our newest feature releases, NFT drops,  <br /> 
        and tips and tricks for navigating Nifty.</center></span>
        <div className="searchbox">
            <input type="search" placeholder='Enter your Email' />
            <button>Sign Up</button>
        </div>
        <div className="strailine"></div>
      </div>
    </>
  )
}

export default About;
