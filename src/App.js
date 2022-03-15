import Navbar from "./components/Navbar";
import ReactCountryFlag from "react-country-flag";

function App() {

  function changeLanguage(lang) {
    //...code for changing site language
  }

  return (
    <>
      <header>
        <div className="flags">
          <button onClick={() => { changeLanguage('polski') }} alt="zmień język na polski">
            <ReactCountryFlag countryCode="PL" style={{ width: '1.5rem', height: '1.5rem' }} svg />
          </button>
          <button onClick={() => { changeLanguage('niemiecik') }} alt="sprechen sie deutsch">
            <ReactCountryFlag countryCode="DE" style={{ width: '1.5rem', height: '1.5rem' }} svg />
          </button>
          <button onClick={() => { changeLanguage('angielksi') }} alt="change site lansuage to english">
            <ReactCountryFlag countryCode="GB" style={{ width: '1.5rem', height: '1.5rem' }} svg />
          </button>
        </div>
        <Navbar />
        <h1>ONCOMEDICA<br /><span>gabinety lekarskie</span></h1>
      </header>

      <section className="offer">
        <p className="offer-caption">
          Oncomedica jest nowym miejscem na mapie Zgorzelca, które zrzesza lekarzy od wielu lat dbających o zdrowie pacjentów. Chcemy, by każda osoba odwiedzająca nasze gabinety otrzymała kompleksową pomoc i bezpieczeństwo.
        </p>
      </section>

      <footer>Adrianna Gryglak for Oncomedica</footer>
    </>
  );
}

export default App;
