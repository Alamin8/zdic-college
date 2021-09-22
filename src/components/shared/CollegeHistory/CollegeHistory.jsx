import React, { useState } from "react";
import "./CollegeHistory.css";
import CollegePic from '../../../images/collegePic.jpg'
import PrincipalPic from '../../../images/Principal .jpg'
const CollegeHistory = () => {
    const [readMore, setReadMore]= useState(false)
    const [MsgMore, setMsgMore]=useState(false)
  return (
    <>
      <div className="collegeHistory">
        <div className="section-container">
          <div className="historyTitle">
            <h1>Welcome to Zirabo Dewan Idris College</h1>
          </div>
          <div className="historyDetails">
              <div className="historyLeft">
                <img src={CollegePic} alt="College" />
              </div>
              <div className="historyRight">
                <p> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem vel rerum minus velit similique, quam consequuntur? Ullam officiis corporis alias placeat modi fugit ipsa rerum aut amet maxime doloremque repellat incidunt sunt, voluptate saepe provident eum nobis distinctio consectetur odio, quae aliquam repellendus officia earum vel pariatur atque quidem quo dignissimos suscipit ipsam aperiam aut nihil. Voluptas dolores repellendus mollitia asperiores aspernatur iusto totam molestiae exercitationem necessitatibus,</span> <br /> <span className={`readMoreDisable ${readMore ? 'readMoreActive' : ''}`} >  dolor officia pariatur atque voluptatem ducimus consectetur adipisci architecto ea consequuntur quos, provident quis culpa. Repudiandae minus illum omnis id fuga corrupti dolore perferendis itaque sapiente maiores? Pariatur, provident eligendi? Corporis excepturi, consequuntur culpa voluptatem ex quia quaerat mollitia commodi magni unde ratione fugiat, incidunt rem dolore provident at dolores. Eaque, doloribus voluptatum asperiores in eveniet temporibus? Quibusdam, nesciunt. Tempora asperiores optio repellendus nulla quo, consequatur quae, exercitationem inventore fuga recusandae quidem aut quia?</span> </p>
                {!readMore ? <button className="readMoreBtn" onClick={()=>setReadMore(true)}>Read more</button>:
                <button className="readMoreBtn" onClick={()=>setReadMore(false)}>Read less</button>}
              </div>
          </div>

          <div className="principalMessage">
              <div className="principalMsgLeft">
              <div className="principaldetails">
                <span className="principalName">Md. Alomgir Hossain </span> <br />
                <span className="principalTitle">Principal</span>
              </div>
              <span className="principalShortMsg">Message</span>
              <p><i class="fas fa-quote-left" id="qoute"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem vel rerum minus velit similique, quam consequuntur? Ullam officiis corporis alias adipisicing elit. Rem vel rerum minus velit similique, quam consequuntur? Ullam officiis corporis aliasadipisicing elit. Rem vel rerum minus velit similique, quam consequuntur? Ullam officiis corporis alias placeat modi fugit ipsa rerum aut amet maxime doloremque em quo dignissimos suscipit ipsam aperiam aut nihil. Voluptas dolores repellendus mollitia asperiores aspernatur iusto totam molestiae exercitationem necessitatibus<i class="fas fa-quote-right" id="qoute" ></i></p>
              </div>
              <div className="principalMsgRight">
                <img src={PrincipalPic} alt="PrincipalPic" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeHistory;
