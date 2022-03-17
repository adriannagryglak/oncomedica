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
        (<>
          <PopUpBtn appointmentBtn={true} backToPopUp={backToPopUp} />
          <h4>{props.data.doctor}</h4>
          <p>gabinet przyjmuje: {props.data.gabinet}</p>
          <p>rezerwacja czynna: {props.data.recepcja}</p>
          <p>nr telefonu: {props.data.tel}</p>
          {props.data.link && <a href={props.data.link}>umów się przez znanylekarz.pl</a>}
        </>)
        : (<>
            <PopUpBtn appointmentBtn={false} remove={props.remove} />
            <h4>{props.data.doctor}</h4>
            {elements}
            <button className="wizyta" onClick={makeReservation}>UMOW WIZYTE</button>
        </>);

    return (
        <div className='pop-up'>
            {popUp}
        </div>
    )
}