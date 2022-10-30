import React from 'react'
import {FiMail, FiFacebook, FiInstagram, FiDribbble, FiLinkedin, FiGithub} from 'react-icons/fi'
import './FooterStyle.css'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
          

     
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
           
          </Link>
        </div>

        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Home</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Home</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Home</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
          <form>
            <h3>join Our Team</h3>
            <input type="email" placeholder="Enter email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
            </div>
          <div className="dambe">

          <p>Prepared by: Group 5 right 2022</p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer
