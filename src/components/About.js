import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';


export default function About(props) {

    const [isOpen, setOpen] = useState(false);
    let icon = isOpen ? <IoIosArrowUp/> : <IoIosArrowDown />;

    function toggleContent(){
        setOpen(prev => !prev);
    }

    const elements = [];
    for (let key in props.data){
        const element = (
            <div className='doctor' key={key}>
                <img src={props.data[key].doctorImg} alt="doctor"></img>
                <h3>{props.data[key].doctor}</h3>
                <p>{props.data[key].about}</p>
            </div>)
        elements.push(element);
    }

    return (<section id="about">
                <h2 onClick={toggleContent}>poznajmy się {icon} </h2>
                <div className={isOpen ? "doctors-container" : "doctors-container closed"}>
                    {elements}
                </div>
           </section>)

}