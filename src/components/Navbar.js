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
                <li>o nas</li>
                <li>oferta</li>
                <li>kontakt</li>
            </ul>
        </nav>
    )
}

//TO DO
//if desktop - render without hamburger, diffrent styling for ul and maybe logo image
//listen for screen resize 