import Navbar from "./components/Navbar";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { appData } from './data';
import { useMediaPredicate } from "react-media-hook";
import Offer from "./components/Offer";

function App() {

  const [language, setLanguage] = useState(navigator.language);
  const data = appData[language];

  function changeLanguage(lang) {
    setLanguage(lang)
  }

  let biggerThan700 = useMediaPredicate('(min-width: 700px)');
  const flagStylesSmall = { width: '1.5rem', height: '1.5rem' };
  const flagStylesBig = { width: '2.5rem', height: '2.5rem' };

  return (
    <>
      <header>
        <div className="flags">
          {!'pl-PL'.includes(language) &&
            <button onClick={() => { changeLanguage('pl') }} alt="zmień język na polski">
              <ReactCountryFlag countryCode="PL" style={biggerThan700 ? flagStylesBig : flagStylesSmall} svg />
            </button>}
          {!'de-DE'.includes(language) &&
            <button onClick={() => { changeLanguage('de') }} alt="sprechen deutsch">
              <ReactCountryFlag countryCode="DE" style={biggerThan700 ? flagStylesBig : flagStylesSmall} svg />
            </button>}
          {!'en-US'.includes(language) &&
            <button onClick={() => { changeLanguage('en') }} alt="change language to english">
              <ReactCountryFlag countryCode="GB" style={biggerThan700 ? flagStylesBig : flagStylesSmall} svg />
            </button>}
        </div>
        <Navbar />
        <h1>{data.h1}</h1>
      </header>

      <Offer language={language} data={data} />

      <footer>Adrianna Gryglak for Oncomedica</footer>
    </>
  );
}

export default App;
