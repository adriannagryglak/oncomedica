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

    return (
        <section id="offer">
            <p className={popUp ? 'blur offer-caption' : 'offer-caption' }>
                {props.data.p}
            </p>
            <h2 className={popUp && 'blur'}>jak możemy pomoc?</h2>
            <div className="offer-container">
                {popUp && <PopUp id={popUp} remove={hideDetails} data={props.data.offer[popUp]} />}
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