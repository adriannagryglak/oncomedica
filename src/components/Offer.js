import { useState } from "react";
import PopUp from './PopUp';

export default function Offer(props) {

    const [popUp, setPopUp] = useState(null);

    function showDetails(id) {
        setPopUp(id);
    }

    function hideDetails() {
        setPopUp(null);
    }

    //petla po data i kazdemu button
    return (
        <section className="offer">
            <p className={popUp ? 'blur offer-caption' : 'offer-caption' }>
                {props.data.p}
            </p>
            <div className="offer-container" id="offer">
            <h2 className={popUp && 'blur'}>jak możemy pomoc?</h2>
                {popUp && <PopUp id={popUp} remove={hideDetails} data={props.data.details[popUp]} />}
                <button className={`offer-btn ${popUp && 'blur'}`} id="chirurgia" onClick={(e) => { showDetails(e.currentTarget.id) }}>
                    <h3>chirurgia ogólna i onkologiczna</h3>
                </button>
                <button className={`offer-btn ${popUp && 'blur'}`} id="kardiologia" onClick={(e) => { showDetails(e.currentTarget.id) }}>
                    <h3>kardiologia i internistyka</h3>
                </button>
                <button className={`offer-btn ${popUp && 'blur'}`} id="urologia" onClick={(e) => { showDetails(e.currentTarget.id) }}>
                    <h3>urologia</h3>
                </button>
            </div>
        </section>
    )
}