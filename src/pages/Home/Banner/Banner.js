import React from 'react';
import './Banner.css';
import logo from '../../../images/logo2.png';

const Banner = () => {

    return (
         < >
         {/* logo */}
        <div className="logo-style">
        <img src={logo} alt="" />
        </div>
        {/* banner image set */}
        <div className="bg-image">
        <h1>Best Food Waiting For Your Belly</h1>
        <input className="input-style" type="text" placeholder="Search Food Items" />
        <button className="btn-style">Search</button>
        </div>
        </>
    );
};

export default Banner;