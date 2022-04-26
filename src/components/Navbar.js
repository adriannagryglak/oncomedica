import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function Navbar(props) {

    const [navOpen, setNavOpen] = useState(false);

    function navOnClick() {
        setNavOpen(prev => !prev);
    }
    
    return (
        <nav className={navOpen ? "nav-open" : ""}>
            {!props.isScreen && <div className={`hamburger ${navOpen ? "nav-open" : "nav-closed"}`} onClick={navOnClick}>
                <div className="burger1"></div>
                <div className="burger2"></div>
                <div className="burger3"></div>
            </div>}

            <div className="flags">
                    {!'pl-PL'.includes(props.lang) &&
                        <button onClick={() => { props.onClick('pl') }} alt="zmień język na polski">
                            <ReactCountryFlag countryCode="PL" style={props.style} svg />
                        </button>}
                    {!'de-DE'.includes(props.lang) &&
                        <button onClick={() => { props.onClick('de') }} alt="sprechen deutsch">
                            <ReactCountryFlag countryCode="DE" style={props.style} svg />
                        </button>}
                    {!'en-US'.includes(props.lang) &&
                        <button onClick={() => { props.onClick('en') }} alt="change language to english">
                            <ReactCountryFlag countryCode="GB" style={props.style} svg />
                        </button>}
                </div>
                <ul>
                    <li><a href="#offer">oferta</a></li>
                    <li><a href="#contact">kontakt</a></li>
                    <li><a href="#about">o nas</a></li> 
                </ul>
        </nav>
    )
}
