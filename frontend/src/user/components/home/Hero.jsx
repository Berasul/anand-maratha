import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from '../../styles/Home.module.css';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

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
        autoplay: true,
        loop: true,
        pagination: false,
        modules: [Autoplay],
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
        <section id="banner" className={`${styles.banner_section} first-section`}>
            <div className="banner-slider">
                <Swiper {...swiperSettings}>
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <div className={`${styles.banner_image}`}>
                                <img src={banner.src} alt="banner" loading='lazy' height='100%' width='100%' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Hero;