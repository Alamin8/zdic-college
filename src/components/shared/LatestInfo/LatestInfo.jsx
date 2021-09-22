import React from "react";
import "./LatestInfo.css";
import Infokosh from '../../../images/infokosh-logo .png'
import Ebook from '../../../images/ebook_bangla .png'
import FormPortal from '../../../images/forms_portal_logo .png'
import ServicePortal from '../../../images/services_portal .png'

const LatestInfo = () => {
  return (
    <>
      <div className="latestInfo">
        <div className="section-container">
          <div className="latestInfo-heading">
            <span>Latest Info</span>
          </div>
          <div className="latestInfoContent">
            <div className="latestInfoNotice">
              <div className="NoticeName">
                <span>Latest Notice</span>
              </div>
              <div className="allNotice">
                <div class="marquee">
                  <div class="marquee__content">
                    <ul class="list-inline">
                      <li>Text 1</li>
                      <li>Text 4</li>
                      <li>Text 3</li>
                      <li>Text 4</li>
                      <li>Text 5</li>
                      <li>Text 1</li>
                      <li>Text 4</li>
                      <li>Text 3</li>
                      <li>Text 4</li>
                      <li>Text 5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="latestInfoEvent">
              <div className="NoticeName">
                <span>Latest Events</span>
              </div>
              <div className="allEvents">
                <div class="marquee">
                  <div class="marquee__content">
                    <ul class="list-inline">
                      <li>Text 1</li>
                      <li>Text 4</li>
                      <li>Text 3</li>
                      <li>Text 4</li>
                      <li>Text 5</li>
                      <li>Text 1</li>
                      <li>Text 4</li>
                      <li>Text 3</li>
                      <li>Text 4</li>
                      <li>Text 5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="latestInfoLinks">
              <div className="NoticeName">
                <span>Useful Links</span>
              </div>
              <div className="allLinks">
                  <a href="https://www.infokosh.bangladesh.gov.bd/" target="_blank"> <img src={Infokosh} alt="" /></a>
                  <a href="https://www.ebook.gov.bd/" target="_blank"> <img src={Ebook} alt="" /></a>
                  <a href="https://forms.portal.gov.bd/" target="_blank"> <img src={FormPortal} alt="" /></a>
                  <a href="https://services.portal.gov.bd/" target="_blank"> <img src={ServicePortal} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestInfo;
