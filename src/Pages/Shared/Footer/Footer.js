import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <div className="container fluid ">
         <div className="contract pt-5 text-center fs-1">
           <h3>Contract Us</h3>
          <i className="fab fa-facebook-f p-3"></i>
          <i className="fab fa-skype p-3"></i>
          <i className="fab fa-instagram p-3"></i>
          <i className="fab fa-twitter"></i>
         </div>
        
      </div>
      <div className="footer-logo pt-5">
        <img className="" src="images/footer-logo.png" alt=""/>
      </div>
      <div className="copyright pt-5">
        <p>Copyright 2021. All Right Reserved</p>
      </div> 
        </div>
    );
};

export default Footer;