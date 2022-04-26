import Navbar from "./components/Navbar";
import { useState } from "react";
import { appData } from './data';
import { appDataEn } from './dataEnglish';
import { appDataGe } from './dataGerman';
import { useMediaPredicate } from "react-media-hook";
import Offer from "./components/Offer";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {

  const getNavigatorLanguage = () => {
    if (navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'pl';
    }
  }

  const [language, setLanguage] = useState(getNavigatorLanguage);

  function changeLanguage(lang) {
    setLanguage(lang)
  }


  //media queries & resize listener
  let biggerThan700 = useMediaPredicate('(min-width: 700px)');
  const flagStylesSmall = { width: '1.5rem', height: '1.5rem' };
  const flagStylesBig = { width: '2.5rem', height: '2.5rem' };
  let biggerThan992 = useMediaPredicate('(min-width: 992px)');

  let data = 'pl-PL'.includes(language) ? appData :
             'de-DE'.includes(language) ? appDataGe : appDataEn;

  return (
    <>
      <header>
        {biggerThan992 && <Hero />}
        <Navbar isScreen={biggerThan992} lang={language} onClick={changeLanguage} style={biggerThan700 ? flagStylesBig : flagStylesSmall}/>
        <h1>{data.h1}</h1>
      </header>
      <p className={'offer-caption' }>{data.p}</p>
      <Offer data={data} />
      <Gallery isScreen={biggerThan992}/>
      <About  data={data.details}/>
      <Contact data={data.contact}/>
      <footer>Oncomedica  gabinety lekarskie  |  adrianna.juda@live.com</footer>
    </>
  );
}

export default App;
