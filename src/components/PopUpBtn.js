import blue from '../assets/blue.png'
import red from '../assets/red.png'


export default function PopUpBtn(props) {

    return <button className={`logo-btn ${props.appointmentBtn ? 'go-back' : 'delete'}`} 
                    alt={props.appointmentBtn ? "click to go back" : 'click to exit'} 
                    onClick={props.appointmentBtn ? props.backToPopUp : props.remove}>
                <img className="blue" src={blue} alt="" />
                <img className="red" src={red} alt="" />
            </button>

}