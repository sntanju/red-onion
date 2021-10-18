import React from 'react';
import logo from '../../../images/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <div className="footer">
        <div className="footer-style">
           <div className="footer-logo">
           <img src={logo} alt="" />
           </div>
               <div className="footer-info">
               <a href="#/">About Online Food</a> <br />
               <a href="#/">Read Our Blog</a><br />
               <a href="#/">Sign Up to Order</a><br />
               <a href="#/">Add Your Resrurent</a><br />
               </div>
               <div className="footer-info">
               <a href="#/">Get Help</a> <br />
               <a href="#/">Read FAQs</a><br />
               <a href="#/">View All Cities</a><br />
               <a href="#/">Resrurent Near to Me</a><br />
               </div>
               </div>

            <div  className="terms"> 
             <p>Copyright &#169; 2021 online food</p>    
             <p>Privacy Policy</p>  
             <p>Terms Of Use </p>   
             <p>Pricing</p>    
            </div>     
        </div>

           </>
    );
};

export default Footer;