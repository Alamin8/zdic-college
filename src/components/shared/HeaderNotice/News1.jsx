import React from "react";
import { Link } from "react-router-dom";
import NewGif from '../../../images/new .GIF'
const News1 = () => {
  return (
    <>
      <Link className="link" to="/">
          <img src={NewGif} alt="gif" /> একাদশ শ্রেণির সাময়িকী পরীক্ষা- ২০২১ সময়সূচি
        </Link>
    </>
  );
};

export default News1;
