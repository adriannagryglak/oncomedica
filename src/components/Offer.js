import { useState, useRef, useEffect } from "react";
import PopUp from './PopUp';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Offer(props) {

    const [popUp, setPopUp] = useState(null);

    function showDetails(id) {
        setPopUp(id);
    }

    function hideDetails() {
        setPopUp(null);
    }

    const buttonsRef = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
    const elements = buttonsRef.current.children;
  
        gsap.set(elements, {autoAlpha: 0});
        gsap.to(elements, {autoAlpha: 1, stagger: 0.7, scrollTrigger: {
            trigger: '#offer',
            start: "top 50%",
        }});

    }, []);


    //petla po data i kazdemu button
    return (
        <section className="offer" id="offer">
          
            <h2 className={popUp && 'blur'}>jak możemy pomoc?</h2>
                {popUp && <PopUp id={popUp} remove={hideDetails} data={props.data.details[popUp]} />}

                <div className="buttons-container" ref={buttonsRef}>
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