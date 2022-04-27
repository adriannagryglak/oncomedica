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


    const buttons = [];
    
    for(let key in props.data.details){
        let el = (
            <button className={`offer-btn ${popUp && 'blur'}`} title={props.data.details[key].doctor} id={key} key={key} onClick={(e) => { showDetails(e.currentTarget.id) }}>
                <h3>{props.data.details[key].fullName}</h3>
            </button>
        );
        buttons.push(el);
    }



    return (
        <section className="offer" id="offer">
          
            <h2 className={popUp && 'blur'}>{props.data.sections.offer[1]}</h2>
                {popUp && <PopUp id={popUp} remove={hideDetails} text={props.data.appointment} details={props.data['appointment-details']} data={props.data.details[popUp]} />}
                <div className="buttons-container" ref={buttonsRef}>
                    {buttons}
                </div>
        </section>
    )
}