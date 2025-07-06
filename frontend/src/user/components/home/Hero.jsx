import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from '../../styles/Home.module.css';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 552);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const swiperSettings = {
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: false,
        loop: true,
        speed: 1000,
        navigation: true,
        pagination: false,
        modules: [Autoplay, Navigation],
    };


    const desktopBanners = [
        { src: '/images/user/home/banner/1.jpeg', alt: "Banner" },
        { src: '/images/user/home/banner/2.jpeg', alt: "Banner" },
        { src: '/images/user/home/banner/3.jpeg', alt: "Banner" },
    ];

    const mobileBanners = [
        { src: '/images/user/home/banner/1.jpeg', alt: "Banner" },
        { src: '/images/user/home/banner/2.jpeg', alt: "Banner" },
        { src: '/images/user/home/banner/3.jpeg', alt: "Banner" },
    ];

    const banners = isMobile ? mobileBanners : desktopBanners;

    return (
        <section id="banner" className={`${styles.banner_section}`}>
            <div className={`${styles.banner_slider}`}>
                <Swiper
                    {...swiperSettings}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>

                            <div className={`${styles.banner_slide}`}>
                                <div className={`${styles.banner_image}`}>
                                    <img src={banner.src} alt="banner" loading='lazy' />
                                </div>
                                <div
                                    className={`${styles.banner_content} ${index === activeIndex ? styles.active : ''}`}
                                >
                                    <div>
                                        <h2>आनंद मराठा वधुवर केंद्र®</h2>
                                        <h4>मराठा समाजासाठी महाराष्ट्रातील अग्रणी विवाहसंस्था®</h4>
                                    </div>
                                    <div>
                                        <p>» More Than 16000 new Registration every Year</p>
                                        <p>» Our Marriage Bureau is only for MARATHA Caste</p>
                                        <p>» Profile Matching & Express Interest facilities are available</p>
                                        <p>» No need to register your name with any other bureau</p>
                                        <p>» Thousands of marriages are settled through our bureau as on today</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;