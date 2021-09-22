import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="mainFooter">
          <div className="section-container">
            <div className="footerContent">
              <div className="footerAbout">
                <span className="footergHeading">About us</span>
                <p>The mission and vision of our school which was to give our children education in an Islamic environment initially started from the thought of pronounced Islamic leaders from around the world.</p>
              </div>
              <div className="footerQuickLinks">
                <span className="footergHeading">Quick Links</span>
                <ul>
                    <li> <Link className="link" to="/">Our Aim</Link></li>
                    <li> <Link className="link" to="/">Management Message</Link></li>
                    <li> <Link className="link" to="/">Info For Guardian</Link></li>
                    <li> <Link className="link" to="/">Rules & Regulation</Link></li>
                </ul>
              </div>
              <div className="footerOfficeHour">
                <span className="footergHeading">Office hours</span>
                <div className="officeHourDetails">
                    <div className="hourDay">
                        <div className="hourDayIcon">
                            <i class="far fa-clock"></i>
                        </div>
                        <div className="hourDayText">
                            <p>SATURDAY - THURSDAY </p>
                            <span>9.00 AM - 2:00 PM</span>
                        </div>
                    </div>
                    <div className="hourDay">
                        <div className="hourDayIcon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="hourDayText">
                            <p>Contact No </p>
                            <span>0179494XXXX</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="footerContact">
                <span className="footergHeading">Contact Info</span>
                <div className="contactInfodetails">
                    <div className="contactInfoItem">
                        <div className="contactInfoIcon">
                        <i class="far fa-envelope"></i>
                        </div>
                        <div className="contactInfoText">
                            <p><span>Email:</span> zdic@gmail.com</p>
                        </div>
                    </div>
                    <div className="contactInfoItem" id="addressInfo">
                        <div className="contactInfoIcon" id="contactInfoIcon">
                        <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contactInfoText" id="locationDetails">
                            <p><span>Address:</span> Zirabo, Ashulia, Savar, Dhaka</p>
                        </div>
                    </div>
                    <div className="footerSocialLink">
                        <div className="facebookLink">
                            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="facebookLink">
                            <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                        </div>
                        <div className="facebookLink">
                            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRightFooter">
            <div className="section-container copyRightText">
                <p><span>Zirabo Dewan Idris College</span> © Copyright 2021 | Developed By <span>Alamin Mirdha</span></p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
