import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import dish1 from "../public/images/dish1.jpg"
import dish2 from "../public/images/dish2.jpg"
import dish3 from "../public/images/dish3.jpg"

function Gallery() {
  return (
    <>
    <Header />
  {/* Gallery Section */}
  <section id="gallery" className="gallery">
    <h2>Gallery</h2>
    <div className="images">
      <img src={dish1} alt="Pizza" />
      <img src={dish2} alt="Pav-Bhaji" />
      <img src={dish3} alt="Frankie" />
    </div>
  </section>
  <Footer />
</>

  );
}

export default Gallery;