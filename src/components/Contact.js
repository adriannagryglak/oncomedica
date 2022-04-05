

export default function Contact(props) {

    return <section id="contact">
        <div className="contact-container">
            <h2>skontaktujmy się</h2>
            <div className="contact-data">
                <p>{props.data.title}</p>
                <p>{props.data.email}</p>
                <a href="#offer">UMÓW WIZYTĘ</a>
                <p>{props.data.street}</p>
                <p>{props.data.city}</p>
            </div>
            <div className="map-container">
                <iframe title="google maps for oncomedica"  style={{border: 'none' , width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2502.3624497504725!2d15.000316000000002!3d51.157107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4708dc3e6784490b%3A0xde759dcbcce343d2!2sWyspia%C5%84skiego%2045C%2C%2059-900%20Zgorzelec!5e0!3m2!1spl!2spl!4v1648551097068!5m2!1spl!2spl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
}



