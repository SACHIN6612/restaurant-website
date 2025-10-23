import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  return (
    <>
    <Header />
  {/* Contact Section */}
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <p>📍 123 Main Street, City</p>
    <p>📞 +1 234 567 890</p>
    <p>📧 info@deliciousbites.com</p>
    <div className="map">
      {/* Google Map Embed Example */}
      <iframe
        src="https://www.google.com/maps/embed?..."
        width="100%"
        height={300}
        style={{ border: 0 }}
        allowFullScreen=""
      />
    </div>
  </section>
  <Footer />
</>

  );
}

export default Contact;
