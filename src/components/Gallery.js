import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay } from "swiper";

export default function Gallery(props) {

    const swiperRef = useRef(null);

    return <section>
        <div className="gallery">
            <div id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()}><IoIosArrowBack /></div>
            <div id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()}><IoIosArrowForward /></div>
            <Swiper
               
                ref={swiperRef}
                loop={true}
                spaceBetween={0}
                slidesPerView={props.isScreen ? 1.5 : 1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
            >
                <SwiperSlide className="slide"><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide className="slide"><img src={img4} alt="" /></SwiperSlide>
            </Swiper>

        </div>


    </section>
}
