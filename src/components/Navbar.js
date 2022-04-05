import { useState } from "react";

export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false);

    function navOnClick() {
        setNavOpen(prev => !prev);
    }

    
    return (
        <nav className={`${navOpen ? "nav-open" : ""}`}>
            <div className={`hamburger ${navOpen ? "nav-open" : "nav-closed"}`} onClick={navOnClick}>
                <div className="burger1"></div>
                <div className="burger2"></div>
                <div className="burger3"></div>
            </div>
            <ul>
                <li><a href="#offer">oferta</a></li>
                <li><a href="#contact">kontakt</a></li>
                <li><a href="#about">o nas</a></li>
            </ul>
        </nav>
    )
}
