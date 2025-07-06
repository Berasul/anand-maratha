import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import generalStyles from '../styles/UserGeneral.module.css'
import styles from "../styles/Home.module.css";
import Hero from "../components/home/Hero";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

const Home = () => {
    return (
        <>
            <title>Maratha Matrimony - Find Your Perfect Maratha Brides/Grooms</title>

            <Hero />

            {/* Our Services */}
            <div className={`${styles.services} ${generalStyles.dark_bg} ${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <div className={`${generalStyles.section_title}`}>
                    <h2>Our Services</h2>
                    <img src="/images/user/general/title_bottom.png" alt="title bottom" loading="lazy" />
                </div>
                <div className={`${styles.services_desc} pb-3`}>
                    <p>
                        Welcome to Anand Maratha Matrimony Services, the premier matrimonial service provider exclusively for Maratha community. We understand that the Maratha community is diverse and rich in culture and traditions. At Anand Maratha Matrimony Services, we are committed to helping you find your life partner from within the Maratha community, whether you are looking for a match from 96 Kuli Maratha, Deshmukh Maratha, Kunbi Maratha, or any other subcaste within the Maratha community. We trust choosing your soul mate is a big and important decision, and hence effort towards giving a simple and safe matchmaking occurrence for you and your family. The purpose behind making maratha matrimony site online is to connect people with other having same interest and habit. You can find a perfect match of your Maratha caste or particular interest. So if you are still looking for someone special in your life then you should really enroll with
                        <b> Anand Maratha Matrimony.</b>
                    </p>
                    <p className="mb-0">
                        With over 26 years of experience in the field of best matrimonial services, we have earned a reputation for being one of the most reliable and trustworthy service providers within the Maratha community. Our database is filled with verified profiles of eligible brides and grooms from within the Maratha community, ensuring that you find the perfect match that meets your preferences and expectations. Our services include personalized matchmaking services, access to verified profiles, and a range of membership plans that cater to your budget and requirements. Our team of experienced professionals is dedicated to guiding you through the entire process, from creating your profile to finding the perfect match.
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className={`${styles.marriage_card_outer}`}>
                            <div className={`${styles.marriage_card}`}>
                                <img src="/images/user/home/services/service2.png" alt="service2" loading="lazy" />
                                <h3><Link to="/">Enroll</Link></h3>
                                <p>Enroll with us by paying just Rs.2000/- with net banking / debit or credit card. You can also submit enroll form & can pay fees through separate payment gateway link afterwards.</p>
                                <Link to="/" className={`${styles.read_more}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.marriage_card_outer}`}>
                            <div className={`${styles.marriage_card}`}>
                                <img src="/images/user/home/services/service1.png" alt="service1" loading="lazy" />
                                <h3><Link to="/">Matching</Link></h3>
                                <p>You can search similar profiles for you through this option instantly with criteria like height, education, age, mangalik, native place & occupation place. However all these criteria are optional.</p>
                                <Link to="/" className={`${styles.read_more}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.marriage_card_outer}`}>
                            <div className={`${styles.marriage_card}`}>
                                <img src="/images/user/home/services/service3.png" alt="service3" loading="lazy" />
                                <h3><Link to="/">Response</Link></h3>
                                <p>You will get contact details of matching profiles through this option by mail. Also your interest will be sent to all these matching profiles by SMS & email after submission.</p>
                                <Link to="/" className={`${styles.read_more}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* About Us */}
            <div className={`${styles.about_us} ${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <div className="row">
                    <div className="col-md-4">
                        <div className={`${styles.about_us_desc}`}>
                            <div className={`${generalStyles.section_title} mb-0 align-items-start`}>
                                <h2>About <span>Us</span></h2>
                            </div>
                            <p className="mb-0">
                                Ours is a most popular & trusted marriage bureau only for <b>Maratha Caste</b> having profiles from all over nearby states, Maharashtra & abroad. We have experience of last 26 years with around 16000 new registrations every year. Our services are –express interest, exact online search, getting contact details of profiles instantly by SMS or email. Around 28000 happy marriages are well settled through us as yet.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.about_us_image}`}>
                            <img src="/images/user/home/about/Maratha_Matrimony.png" alt="Maratha Matrimony" loading="lazy" height="400" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${generalStyles.section_title} mb-0 align-items-start`}>
                            <h2>Profiles</h2>
                        </div>
                        <div className={`${styles.bar_group}`}>
                            {bars.map((bar, index) => (
                                <React.Fragment key={index}>
                                    <p className={`${styles.b_label}`} style={{ marginLeft: bar.labelMargin || 0 }}>
                                        <a href={bar.link}>{bar.label}</a>
                                    </p>
                                    <div
                                        className={`${styles.bar_group__bar}`}
                                        show_values="true"
                                        tooltip="true"
                                        value={bar.value}
                                        style={{ marginBottom: '40px', width: `${bar.width}%`, }}
                                    >
                                        <p className={`${styles.bar_label_min}`}></p>
                                        <p className={`${styles.bar_label_max}`}></p>
                                        <div className={`${styles.b_tooltip}`}>
                                            <span>{bar.value}</span>
                                            <div className={`${styles.b_tooltip_tri}`}></div>
                                        </div>
                                        <p className={`${styles.bar_label_min}`}></p>
                                        <p className={`${styles.bar_label_max}`}></p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

            {/* Profiles */}
            <div className={`${styles.profiles} ${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    autoplay={true}
                    loop={true}
                    pagination={swiperSettings.pagination}
                    modules={[Autoplay]}
                >
                    {profiles.map((data, index) => (
                        <SwiperSlide key={index}>
                            <div className={`${styles.profile_slide}`}>
                                <img src={data.src} alt="profile image" loading='lazy' height='120' width='120' />
                                <h6>{data.id} <span className="text-uppercase">( {data.name} )</span></h6>
                                <p><b>Date of Birth:</b> {data.dob}</p>
                                <p><b>Height:</b> {data.dob}</p>
                                <p><b>Education:</b> {data.education}</p>
                                <p><b>Occupation:</b> {data.occupation}</p>
                                <p><b>Native Place:</b> {data.native}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Our Services */}
            <div className={`${styles.services} ${styles.services_light} ${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <div className={`${generalStyles.section_title}`}>
                    <h2>Our Services</h2>
                    <img src="/images/user/general/title_bottom.png" alt="title bottom" loading="lazy" />
                </div>
                <div className={`${styles.services_desc} pb-3`}>
                    <p>
                        <b>Anand Maratha®</b> is a main platform to meet similar people and find the one with whom you can spend rest of your life together. We have a success story of couples who found the perfect match on Anand Maratha vadhu var suchak mandal. The online Marathi matrimony sites are increasing popularity among singles and all the single people around the world should use this platform to find the perfect partner for them. However, in this online world, you really don’t know what the truth is. You should follow Maratha marriage bureau if you want to find a perfect partner on matrimonial sites.
                    </p>
                    <p className="mb-0">
                        We understand that finding the right partner can be a challenging and overwhelming task. That's why we offer personalized matchmaking services that cater to your specific needs and preferences. We believe that every individual within the <b>Maratha Caste</b> deserves to find their life partner and build a fulfilling and happy life together. Join Anand Maratha Matrimony Services today and take the first step towards finding your life partner within the Maratha community. We are committed to helping you find the perfect match that meets your preferences and expectations, and we are dedicated to ensuring that you have a pleasant and stress-free experience throughout the process.
                    </p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className={`${styles.marriage_card_outer}`}>
                            <div className={`${styles.marriage_card}`}>
                                <img src="/images/user/home/services/service1.png" alt="service2" loading="lazy" />
                                <h3><Link to="/">Photo Edit</Link></h3>
                                <p>You can add/update your photo instantly through this option very easily. Your photo will be added/updated on website instantly after submission of photo. For this option you need only your registered email ID & registration ID.</p>
                                <Link to="/" className={`${styles.read_more}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.marriage_card_outer}`}>
                            <div className={`${styles.marriage_card}`}>
                                <img src="/images/user/home/services/service2.png" alt="service1" loading="lazy" />
                                <h3><Link to="/">Success Stories</Link></h3>
                                <p>This is listing of grooms & brides who are happily married through us & enjoying their married life. Due to our private guidelines, we have not given their photograph & contact details online. Around 28000 weddings are settled through us as yet.</p>
                                <Link to="/" className={`${styles.read_more}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.marriage_card_outer}`}>
                            <div className={`${styles.marriage_card}`}>
                                <img src="/images/user/home/services/service3.png" alt="service3" loading="lazy" />
                                <h3><Link to="/">Magazine</Link></h3>
                                <p>You can download month wise short listing of all matching profiles through this option. This is only month wise listing of matching profiles registered in particular month with its link. You can get this month wise listing for last year.</p>
                                <Link to="/" className={`${styles.read_more}`}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Home;

const profiles = [
    {
        id: 'MG144004',
        src: '/images/user/home/profiles/user.jpeg',
        name: 'sirsat - bhosale',
        dob: '01-01-1990',
        height: '5.04',
        education: 'B.E. (Computer)',
        occupation: 'Software Engineer',
        native: 'Kharadi, Pune',
    },
    {
        id: 'MG144004',
        src: '/images/user/home/profiles/user.jpeg',
        name: 'sirsat - bhosale',
        dob: '01-01-1990',
        height: '5.04',
        education: 'B.E. (Computer)',
        occupation: 'Software Engineer',
        native: 'Kharadi, Pune',
    },
    {
        id: 'MG144004',
        src: '/images/user/home/profiles/user.jpeg',
        name: 'sirsat - bhosale',
        dob: '01-01-1990',
        height: '5.04',
        education: 'B.E. (Computer)',
        occupation: 'Software Engineer',
        native: 'Kharadi, Pune',
    },
    {
        id: 'MG144004',
        src: '/images/user/home/profiles/user.jpeg',
        name: 'sirsat - bhosale',
        dob: '01-01-1990',
        height: '5.04',
        education: 'B.E. (Computer)',
        occupation: 'Software Engineer',
        native: 'Kharadi, Pune',
    },
    {
        id: 'MG144004',
        src: '/images/user/home/profiles/user.jpeg',
        name: 'sirsat - bhosale',
        dob: '01-01-1990',
        height: '5.04',
        education: 'B.E. (Computer)',
        occupation: 'Software Engineer',
        native: 'Kharadi, Pune',
    },
    {
        id: 'MG144004',
        src: '/images/user/home/profiles/user.jpeg',
        name: 'sirsat - bhosale',
        dob: '01-01-1990',
        height: '5.04',
        education: 'B.E. (Computer)',
        occupation: 'Software Engineer',
        native: 'Kharadi, Pune',
    },
];

const swiperSettings = {
    spaceBetween: 0,
    slidesPerView: 3,
    autoplay: true,
    loop: true,
    pagination: false,
};

const bars = [
    {
        label: 'Grooms',
        link: '/maratha-grooms/1',
        value: 5790,
        width: 46.761427879179,
    },
    {
        label: 'Brides',
        link: '/maratha-brides/1',
        value: 5791,
        width: 46.769504118882,
    },
    {
        label: 'Divorcee Grooms',
        link: '/maratha-divorcee-grooms/1',
        value: 390,
        width: 3.1497334840898,
        labelMargin: '45px',
    },
    {
        label: 'Divorcee Brides',
        link: '/maratha-divorcee-brides/1',
        value: 411,
        width: 3.3193345178485,
        labelMargin: '45px',
    },
];