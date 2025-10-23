import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import restaurant_interior from '/images/restaurant_interior.jpg';
import margerita_pizza from '/images/margherita_pizza.jpg';
import dish1 from '/images/dish1.jpg';
import dish2 from '/images/dish2.jpg';
import dish3 from '/images/dish3.jpg';
import hero from '/images/hero.jpg'

function App() {

  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      setProducts(response.data.products)
    }).catch((error) => {

    })
  }, [])

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

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Welcome to Delicious Bites</h1>
        <p>Experience the taste of tradition &amp; freshness</p>
        <a href="/menu" className="btn">
          View Menu
        </a>
        <a href="/reservation" className="btn">
          Reserve Now
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We are passionate about bringing authentic flavors and a cozy dining
          experience.
        </p>
        <img src={restaurant_interior} alt="Restaurant Interior" />
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">

          {
            (products) ?

              products.map((prod) => (

                <div className="item">
                  <img src={prod.images} alt="item" />
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>
                  <span>₹{prod.price}</span>
                </div>

              ))
              : ''
          }


        </div>
      </section>

      {/* Specials Section */}
      <section id="specials" className="specials">
        <h2>Our Special Item</h2>
        <div className="special-items">

          {
            (products) ?

              products.map((prod) => (

                <div className="special-item">
                  <img src={prod.images} alt="items" />
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>
                  <span>₹{prod.price}</span>
                </div>

              ))
              : ''
          }

        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src={dish1} alt="Pizza" />
          <img src={dish2} alt="Pav-Bhaji" />
          <img src={dish3} alt="Frankie" />
        </div>
      </section>

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

      {/* Footer */}
      <footer>
        <p>© 2025 Delicious Bites | All Rights Reserved</p>
        <div className="socials">
          <a href="#">Facebook</a> |<a href="#">Instagram</a> |
          <a href="#">YouTube</a>
        </div>
      </footer>
    </>
  );
}

export default App;