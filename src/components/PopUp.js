import { useState } from 'react';
import PopUpBtn from './PopUpBtn';

export default function PopUp(props) {

    const [appointmentPanel, setAppointmentPanel] = useState(false);

    const elements = (<ul>
        {props.data.list.map((el, i) => <li key={i}>{el}</li>)}
    </ul>);

    function makeReservation() {
        setAppointmentPanel(prev => !prev);
    }

    function backToPopUp() {
        setAppointmentPanel(false);
    }

    let popUp = appointmentPanel ? 
        (<div>
          <PopUpBtn appointmentBtn={true} backToPopUp={backToPopUp} />
          <h4>dr {props.data.doctor}</h4>
          <p>{props.details[0]}<br/><span>{props.data.gabinet}</span></p>
          <p>{props.details[1]}<br/><span>{props.data.recepcja}</span></p>
          <p><span>{props.data.tel}</span></p>
          {props.data.link && <a href={props.data.link}>znanylekarz.pl</a>}
        </div>)
        : (<div >
            <PopUpBtn appointmentBtn={false} remove={props.remove} />
            <h4>dr {props.data.doctor}</h4>
            {elements}
            <button className="wizyta" onClick={makeReservation}>{props.text}</button>
        </div>);

    return (
        <div className='pop-up' >
            {popUp}
        </div>
    )
}
