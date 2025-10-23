import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App";
import About from './About'
import Menu from './Menu'
import Specials from './Specials'
import Gallery from './Gallery'
import Reservation from './Reservation'
import Contact from './Contact'
import './style.css'; // aapke CSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="home" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="specials" element={<Specials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>,
);
