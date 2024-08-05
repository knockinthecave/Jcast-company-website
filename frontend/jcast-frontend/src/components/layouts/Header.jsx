import React, { useState } from "react";
import jcastLogo from "./assets/jcast-logo.png";
import './css/Header.css'; // Import the CSS file

const headerNav = [
    {
        title: "기업소개",
        url: "/intro",
        submenu: [
            { title: "기업연혁", url: "/company-history" },
            { title: "CEO 인사말", url: "/ceo-message" }
        ]
    },
    {
        title: "제품소개",
        url: "/product",
        submenu: [
            { title: "JMES", url: "/jmes" },
            { title: "AI 솔루션", url: "/ai-solution" },
            { title: "데이터수집", url: "/data-collect" },
            { title: "Dashboard", url: "/dashboard" },
            { title: "제품단가", url: "/product-price" }
        ]
    },
    {
        title: "지속가능경영",
        url: "/sustainability",
        submenu: [
            { title: "윤리경영소개", url: "/code-of-conduct" }
        ]
    }
];

const Header = () => {
    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    const toggleSubmenu = (index) => {
        setActiveMenu((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <header id="header" role="banner" className="noto-sans-kr-header">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">
                        <img src={jcastLogo} alt="jcast Logo" />
                    </a>
                </div>
                <nav
                    className={`header__nav${show ? " show" : ""}`}
                    role="navigation"
                    aria-label="메인메뉴"
                >
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url} onClick={(e) => { e.preventDefault(); toggleSubmenu(key); }}>{nav.title}</a>
                                {nav.submenu && nav.submenu.length > 0 && (
                                    <div className={`submenu-container${activeMenu === key ? " show" : ""}`}>
                                        {nav.submenu.map((sub, subKey) => (
                                            <div key={subKey} className="submenu noto-sans-kr-submenu">
                                                <a href={sub.url}>{sub.title}</a>
                                            </div>
                                        ))}
                                    </div>
                                )}
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
