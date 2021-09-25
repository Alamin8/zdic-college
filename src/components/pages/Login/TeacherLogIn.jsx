import React from "react";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
const TeacherLogIn = () => {
  const [isError, setIsError]=useState(false)
  return (
    <>
      <Header />
      <section className="section-container">
        <div className="login">
          <div className="loginBox">
            <form action="">
              <div className="logHeading">
                  <p><i class="fas fa-lock"></i></p>
                <span>Hey, welcome back !!!</span>
              </div>
              {isError && <div className="error">
                <span className="errorMessage">Invalid email or password</span>
              </div>}
              <div className="loginField">
                <input type="email" name="" id="" placeholder="Email Address" />
                <input type="password" name="" id="" placeholder="Password" />
                <button>Log in</button>
              </div>
              <span className="forgotPassword">
                Forgotten password? <Link className="reset" to="">Reset</Link>
              </span>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeacherLogIn;
