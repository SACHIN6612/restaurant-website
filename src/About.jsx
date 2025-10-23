import React from "react";
import Footer from './Footer'
import Header from "./Header";

function About() {
  return (
    <>
    <Header />
  {/* About Section */}
  <section id="about" className="about">
    <h2>About Us</h2>
    <p>
      We are passionate about bringing authentic flavors and a cozy dining
      experience.
    </p>
    <img src={restaurant_interior} alt="Restaurant Interior" />
  </section>
  <Footer />
</>

  );
}

export default About;
