import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import doubleRastedVest from "./mainpage_images/testcloth1.png";
import beltedSidePocketPants from "./mainpage_images/testcloth2.png";
import meshBodysuit from "./mainpage_images/testcloth3.png";
import classyCashmereJacket from "./mainpage_images/testcloth4.png";
import classyCashmerePants from "./mainpage_images/classy_cashmere_pants.png";
import organzaBlazer from "./mainpage_images/organza_blazer.png";
import cottonSleeveless from "./mainpage_images/cotton_sleeveless.png";
import oneTuckPants from "./mainpage_images/one_tuck_pants.png";
import doubleBeltedPleatsSkirt from "./mainpage_images/double_belted_pleats_skirt.png";
import handmadePearlTie from "./mainpage_images/handmade_pearl_tie.png";
import multiPearlChain from "./mainpage_images/multi_pearl_chain.png";
import logoPearlKeychain from "./mainpage_images/logo_pearl_keychain.png";
import pearlLongScar from "./mainpage_images/pearl_long_scar.png";

// 상품 id, 이름, Url 저장하는 Array
const products = [
  {
    id: 1,
    name: "Double Rasted Vest",
    imageUrl: doubleRastedVest,
  },
  {
    id: 2,
    name: "Belted Side Pocket Pants",
    imageUrl: beltedSidePocketPants,
  },
  {
    id: 3,
    name: "Mesh Bodysuit",
    imageUrl: meshBodysuit,
  },
  {
    id: 4,
    name: "Classy Cashmere Jacket",
    imageUrl: classyCashmereJacket,
  },
  {
    id: 5,
    name: "Classy Cashmere Pants",
    imageUrl: classyCashmerePants,
  },
  {
    id: 6,
    name: "Organza Blazer",
    imageUrl: organzaBlazer,
  },
  {
    id: 7,
    name: "Cotton Sleeveless",
    imageUrl: cottonSleeveless,
  },
  {
    id: 8,
    name: "One Tuck Pants",
    imageUrl: oneTuckPants,
  },
  {
    id: 9,
    name: "Double Belted Pleats Skirt",
    imageUrl: doubleBeltedPleatsSkirt,
  },
  {
    id: 10,
    name: "Handmade Pearl Tie",
    imageUrl: handmadePearlTie,
  },
  {
    id: 11,
    name: "Multi Pearl Chain",
    imageUrl: multiPearlChain,
  },
  {
    id: 12,
    name: "Logo Pearl Keychain",
    imageUrl: logoPearlKeychain,
  },
  {
    id: 13,
    name: "Pearl Long Scar",
    imageUrl: pearlLongScar,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <h1>SUN</h1>
      </header>
      <div className="sub-header">
        <h3>2025 S/S</h3>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav>
          <ul>
            <li>
              <a href="2025 S/S">Home</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
      <div>
        <p>
          MON - FRI AM 10:00 - PM 18:00
          <br />
          LUNCH TIME PM 12:00 - PM 13:00
          <br />
          SAT, SUN, HOLIDAY OFF
        </p>
        <p>
          COMPANY SUN OFFICE
          <br />
          OWNER | BAE SEO HYEON
          <br />
          TEL 010-8820-4903 | E-MAIL SUNOFFICE@NAVER.COM
          <br />
          INSTAGRAM | {"  "}
          <a
            href="https://www.instagram.com/sun_office__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sun_office__
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
