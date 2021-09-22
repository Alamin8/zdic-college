import React from "react";
import "./HomeContact.css";
const HomeContact = () => {
  return (
    <>
      <div className="homeContact">
        <div className="section-container">
          <div className="homeContactTitle">
            <span>Get In Touch</span>
          </div>
          <div className="homeContactDetails">
            <div className="contactLeft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1823.6748684782349!2d90.32156511794183!3d23.912666635440523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a57d23e3797a8df!2sZirabo%20Dewan%20Idris%20College!5e0!3m2!1sen!2sbd!4v1632267715844!5m2!1sen!2sbd"
                width={"100%"}
                height={"450px"}
                style={{ border: "0" }}
                allowfullscreen={""}
                loading={"lazy"}
              ></iframe>
            </div>
            <div className="contactRight">
              <form action="" className="form">
                <input type="text" placeholder="Full name" /> <br />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email"
                />{" "}
                <br />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="Mobile number"
                />{" "}
                <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message here"
                ></textarea>{" "}
                <br />
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContact;
