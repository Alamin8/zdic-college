import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./CounterUp.css";
import StudentIcon from "../../../images/graduated.png";
import TeacherIcon from "../../../images/teachers .png";
import StaffIcon from "../../../images/employee.png";
const CounterUp = () => {
  return (
    <>
      <div className="counter">
        <div className="counterContent">
          <div className="section-container">
          <div className="counterHeading">
            <span>Quick Info</span>
          </div>
          <div className="counterDetails">
            <div className="counterSingleInfo">
              <div className="imageIcon">
                <img src={StudentIcon} alt="" />
              </div>
              <div className="numberCounting">
                <span className="counterNumber">
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                      <div>
                        {isVisible ? <CountUp start={1} end={550} duration={3.00} suffix="+" />  : '550+'}
                      </div>
                    )}
                  </VisibilitySensor>
                </span>
              </div>
              <div className="counterName">
                <span>Students</span>
              </div>
            </div>

            <div className="counterSingleInfo">
              <div className="imageIcon">
                <img src={TeacherIcon} alt="" />
              </div>
              <div className="numberCounting">
                <span className="counterNumber">
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                      <div>
                        {isVisible ? <CountUp start={1} end={25} duration={2.75} suffix="" />  : '25'}
                      </div>
                    )}
                  </VisibilitySensor>
                </span>
              </div>
              <div className="counterName">
                <span>Teachers</span>
              </div>
            </div>

            <div className="counterSingleInfo">
              <div className="imageIcon">
                <img src={StaffIcon} alt="" />
              </div>
              <div className="numberCounting">
                <span className="counterNumber">
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                      <div >
                        {isVisible ? <CountUp start={1} end={12} duration={1.75} suffix="+" />  : '12+'}
                      </div>
                    )}
                  </VisibilitySensor>
                </span>
              </div>
              <div className="counterName">
                <span>Staffs</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterUp;
