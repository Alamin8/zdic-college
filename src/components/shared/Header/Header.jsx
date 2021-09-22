import React from "react";
import "./Header.css";
import logo from "../../../images/logo.jpg";
import boardLogo from "../../../images/board.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="top-container">
          <div className="top-container-data">
            <div className="college-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="college-name">
              <h3>ZIRABO DEWAN IDRIS COLLEGE</h3>
              <h6>
                <span>ESTD. 1996</span>
                <span className="diverder">||</span>
                <span>EIIN: 108454</span>
              </h6>
            </div>
            <div className="board-logo">
              <img src={boardLogo} alt="board logo" />
            </div>
          </div>
        </div>
        <div class="container">
          <input type="checkbox" name="" id="check" />
          <div class="nav-btn">
            <div class="nav-links">
              <ul>
                <li class="nav-link">
                  <Link className="Link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-link">
                  <span className="Link">
                    About Us<i class="fas fa-caret-down"></i>{" "}
                  </span>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link className="Link" to="about-zdic">
                          About ZDIC
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="management">
                          Management
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="teachers">
                          Teacher's
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="office-staff">
                          Office Staff
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="message">
                          Message
                        </Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <span className="Link">
                    Academic<i class="fas fa-caret-down"></i>
                  </span>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link className="Link" to="curriculum">
                          Curriculum
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="academic-calender">
                          Academic Calender
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="routine">
                          Routine
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="book-list">
                          Book List
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="syllabus">
                          Syllabus
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="college-uniform">
                          College Uniform
                        </Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <span className="Link">
                    Department<i class="fas fa-caret-down"></i>
                  </span>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link className="Link" to="department-science">
                          Science
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="department-commerce">
                          Commerce
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="department-humanities">
                          Humanities
                        </Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <span className="Link">
                    Admission<i class="fas fa-caret-down"></i>
                  </span>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link className="Link" to="application-procedure">
                          Application Procedure
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="tution-fees">
                          Tuition Fees
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="admission-form">
                          Admission Form
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="online-admission">
                          Online Admission
                        </Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <span className="Link">
                    Gallery<i class="fas fa-caret-down"></i>
                  </span>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link className="Link" to="photo-gallery">
                          Photo Gallery
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="video-gallery">
                          Video Gallery
                        </Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <Link className="Link" to="contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-link">
                  <Link className="Link" to="notice">
                    Notice
                  </Link>
                </li>
                <li class="nav-link">
                  <span className="Link">
                    Login<i class="fas fa-caret-down"></i>
                  </span>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link className="Link" to="student-login">
                          Student Login
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="guardians-login">
                          Guardian's Login
                        </Link>
                      </li>
                      <li class="dropdown-link">
                        <Link className="Link" to="teachers-login">
                          Teacher's Login
                        </Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="hamburger-menu-container">
            <div className="hamburger-college-name">
              <img src={logo} alt="logo" style={{ height: "3rem" }} />
              <h3>ZDIC</h3>
            </div>
            <div class="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
