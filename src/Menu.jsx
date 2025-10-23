import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Menu() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      setProducts(response.data.products)
    }).catch((error) => {

    })

  }, [])

  return (
    <>
      <Header />
      {/* Menu Section */}
      <section id="menu" className="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">

          {
            (products) ?

              products.map((prod) => (

                <div className="item">
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
      <Footer />
    </>

  );
}

export default Menu;
