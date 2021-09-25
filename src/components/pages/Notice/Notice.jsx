import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import "./Notice.css";
import NoticeItem from "./NoticeItem";
const Notice = () => {
    const Today = new Date()
    const formetedDate = Today.getDate()  + "-" + (Today.getMonth()+1) + "-" + Today.getFullYear() + " " +
                        Today.getHours() + ":" + Today.getMinutes();
    const TableData=[
        {
            "id": 1,
            title: "Agamikal college close thakbe1",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 2,
            title: "Agamikal college close thakbe2",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 3,
            title: "Agamikal college close thakbe3",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 4,
            title: "Agamikal college close thakbe4",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 5,
            title: "Agamikal college close thakbe5",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 6,
            title: "Agamikal college close thakbe6",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 7,
            title: "Agamikal college close thakbe7",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 8,
            title: "Agamikal college close thakbe8",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 9,
            title: "Agamikal college close thakbe9",
            date: formetedDate,
            link:"/student-login"
        },
        {
            id: 10,
            title: "Agamikal college close thakbe10",
            date: formetedDate,
            link:"/student-login"
        },
    ]

  return (
    <>
      <Header />
      <section className="notice">
        <div className="section-container">
          <div className="noticeHeading">
            <span>Notice</span>
          </div>
          <div className="noticeTable">
            <table className="fl-table">
                <thead>
                    <tr>
                        <th className="noticeHeaderSn">SN</th>
                        <th className="noticeHeaderTitle">Title</th>
                        <th className="noticeHeaderPublished">Published</th>
                        <th className="noticeHeaderFile">File</th>
                        <th className="noticeHeaderDownload">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        TableData.map(data=><NoticeItem key={data.id} NoticeItem={data} />)
                    }
                </tbody>
            </table>
          </div>
          <div className="navigate">
              <Link className="link" to="/notice">1</Link>
              <Link className="link" to="/notice">2</Link>
              <Link className="link" to="/notice">3</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Notice;
