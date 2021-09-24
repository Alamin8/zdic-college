import React from "react";
import "./VideoGallery.css";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import YoutubeEmbed from "../../shared/YoutubeEmbed/YoutubeEmbed";

const VideoGallery = () => {
 const embedID = ["nc5Lj90BzSQ", "MDhxgMAqOpM", "r8pmGSLbVS4","nc5Lj90BzSQ", "MDhxgMAqOpM", "r8pmGSLbVS4"]
  return (
    <>
      <Header />
      <section className="videoGallery">
        <div className="section-container">
          <div className="videoGalleryHeading">
            <span>Video Gallery</span>
          </div>
          <div className="videoAlbums">
            {
              embedID.map(eid=><YoutubeEmbed embedId={eid} />)
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VideoGallery;
