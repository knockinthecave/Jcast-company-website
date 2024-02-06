import React, { useState } from "react";
import jcastLogo from "../assets/img/jcast-logo.png"; // Import the image

const headerNav = [
     {
          title: "INTRODUCTION",
          url: "#intro",
     },
     {
          title: "제품소개",
          url: "#product",
     },
];

const Header = () => {
     const [show, setShow] = useState(false);

     const toggleMenu = () => {
          setShow((prevShow) => !prevShow);
     };

     return (
          <header id="header" role="banner">
               <div className="header__inner">
                    <div className="header__logo">
                         <a href="/">
                              <img src={jcastLogo} alt="jcast Logo" /> {/* Use the imported image */}
                         </a>
                    </div>
                    <nav
                         className={`header__nav${show ? "show" : ""}`}
                         role="navigation"
                         aria-label="메인메뉴"
                    >
                         <ul>
                              {headerNav.map((nav, key) => (
                                   <li key={key}>
                                        <a href={nav.url}>{nav.title}</a>
                                   </li>
                              ))}
                         </ul>
                    </nav>
                    <div
                         className="header__nav__mobile"
                         id="headerToggle"
                         aria-controls="primary-menu"
                         aria-expanded={show ? "true" : "false"}
                         role="button"
                         tabIndex="0" 
                         onClick={toggleMenu}
                    >
                         <span></span>
                    </div>
               </div>
          </header>
     );
};

export default Header;