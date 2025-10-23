import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Reservation() {
  return (
    <>
    <Header />
  {/* Reservation Section */}
  <section id="reservation" className="reservation">
    <h2>Book a Table</h2>
    <form>
      <input type="text" placeholder="Your Name" required="" />
      <input type="email" placeholder="Your Email" required="" />
      <input type="tel" placeholder="Phone Number" required="" />
      <input type="date" required="" />
      <input type="time" required="" />
      <input type="number" placeholder="No. of Guests" required="" />
      <button type="submit">Reserve Now</button>
    </form>
  </section>
  <Footer />
</>

  );
}

export default Reservation;