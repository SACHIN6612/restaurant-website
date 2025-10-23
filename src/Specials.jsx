import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Specials() {

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
      <Footer />
    </>

  );
}

export default Specials;
