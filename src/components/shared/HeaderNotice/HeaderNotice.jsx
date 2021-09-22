import React from "react";
import "./HeaderNotice.css";
import Marquee from "react-fast-marquee";
import News1 from "./News1";
const HeaderNotice = () => {
  return (
    <>
      <div className="header-notice">
        <div className="header-notice-title">
          <span>Latest News</span>
        </div>
        <div className="header-notice-details">
          <Marquee
            gradient={false}
            direction={"left"}
            loop={0}
            delay={1}
            pauseOnHover={true}
            style={{cursor:"pointer"}}
            speed={60}
          >
            <News1/>
            <News1/>
            <News1/>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default HeaderNotice;
