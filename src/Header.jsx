import React from "react";

function Header() {
  return (
    <>
  {/* Header / Navigation */}
  <header>
    <nav>
      <div className="logo">Delicious Bites</div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/specials">Specials</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/reservation">Reservations</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <a href="/reservation" className="btn">
        Book a Table
      </a>
    </nav>
  </header>
</>

  );
}

export default Header;
