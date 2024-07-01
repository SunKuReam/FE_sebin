import "./App.css";
import React, { useState } from "react";

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

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

// 상품 id, 이름, Url 저장하는 Array
const products = [
  {
    id: 1,
    name: "Double rasted vest",
    imageUrl: doubleRastedVest,
    description:
      "This double rasted vest is perfect for any formal occasion. Made with high-quality materials, it offers both style and comfort. Available in multiple sizes.",
  },
  {
    id: 2,
    name: "Blelted side pocket pants",
    imageUrl: beltedSidePocketPants,
    description:
      "Our belted side pocket pants are a must-have for any wardrobe. With a modern fit and convenient pockets, these pants are both practical and fashionable.",
  },
  {
    id: 3,
    name: "Mesh bodysuit",
    imageUrl: meshBodysuit,
    description:
      "The mesh bodysuit combines elegance and allure. Perfect for evening wear, it can be paired with skirts or pants for a stunning look.",
  },
  {
    id: 4,
    name: "Classy cashmere jacket",
    imageUrl: classyCashmereJacket,
    description:
      "Stay warm and stylish with our classy cashmere jacket. This jacket is designed to provide maximum comfort while keeping you looking chic and sophisticated.",
  },
  {
    id: 5,
    name: "Classy cashmere pants",
    imageUrl: classyCashmerePants,
    description:
      "Pair these classy cashmere pants with our cashmere jacket for a complete look. Comfortable and stylish, these pants are perfect for any occasion.",
  },
  {
    id: 6,
    name: "Organza blazer",
    imageUrl: organzaBlazer,
    description:
      "The organza blazer adds a touch of elegance to any outfit. Lightweight and stylish, it's perfect for both casual and formal wear.",
  },
  {
    id: 7,
    name: "Cotton sleeveless",
    imageUrl: cottonSleeveless,
    description:
      "This cotton sleeveless top is a wardrobe essential. It's comfortable, versatile, and perfect for layering.",
  },
  {
    id: 8,
    name: "One tuck pants",
    imageUrl: oneTuckPants,
    description:
      "Our one tuck pants offer a modern fit with a classic style. They're perfect for both work and casual outings.",
  },
  {
    id: 9,
    name: "Double belted pleats skirt",
    imageUrl: doubleBeltedPleatsSkirt,
    description:
      "The double belted pleats skirt is a fashionable addition to any wardrobe. It pairs well with both casual and formal tops.",
  },
  {
    id: 10,
    name: "Handmade pearl tie",
    imageUrl: handmadePearlTie,
    description:
      "This handmade pearl tie adds a unique touch to any outfit. It's a perfect accessory for special occasions.",
  },
  {
    id: 11,
    name: "Multi pearl chain",
    imageUrl: multiPearlChain,
    description:
      "The multi pearl chain necklace is elegant and versatile. It can be worn with a variety of outfits for a sophisticated look.",
  },
  {
    id: 12,
    name: "Logo pearl keychain",
    imageUrl: logoPearlKeychain,
    description:
      "Keep your keys stylishly organized with our logo pearl keychain. It's both practical and fashionable.",
  },
  {
    id: 13,
    name: "Pearl long scarf",
    imageUrl: pearlLongScar,
    description:
      "The pearl long scarf is perfect for adding a touch of elegance to any outfit. It's versatile and can be styled in multiple ways.",
  },
];

function Home() {
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
        <h1>
          <Link to="/" className="home-link">
            SUN
          </Link>
        </h1>
      </header>
      <div className="sub-header">
        <h3>2025 S/S</h3>
      </div>

      {/*메뉴 창 위한 부분*/}
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
            <Link to={`/product/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <Link to={`/product/${product.id}`} className="product-name">
              {product.name}
            </Link>
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

function ProductDetail() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <header className="Brand Name">
        <h1>
          <Link to="/" className="home-link">
            SUN
          </Link>
        </h1>
      </header>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
