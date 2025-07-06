import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPinterestSquare, FaTumblrSquare, FaBlogger } from 'react-icons/fa';
import { BsPencilSquare } from "react-icons/bs";
import { IoCall, IoMailOutline } from "react-icons/io5";
import styles from '../styles/UserGeneral.module.css';


const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.side_space} ${styles.vertical_space}`}>
            <div className={`${styles.footer_top_area}`}>
                <div className="container">
                    <div className="row mb-4">
                        {/* Column 1: Payment + App Links */}
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <div className="single-footer">
                                <h3 className="footr">
                                    <a href="https://www.anandmaratha.com/payment-form.php" style={{ color: '#fff' }}>
                                        Click here for Online Payment
                                    </a>
                                </h3>
                                <hr style={{ border: '1px dashed #c7c6c6' }} />
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.anandmaratha.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://www.anandmaratha.com/wp-content/uploads/google-play.png"
                                        alt="Google Play"
                                        style={{ width: '51%' }}
                                    />
                                </a>
                                <hr style={{ border: '1px dashed #c7c6c6' }} />
                                <a
                                    href="https://itunes.apple.com/in/app/anand-maratha-vadhu-var-kendra/id1348767966?mt=8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://www.anandmaratha.com/wp-content/uploads/app-store.png"
                                        alt="App Store"
                                        style={{ width: '50%' }}
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Logo + Visitor Counter */}
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <div className="single-footer">
                                <a
                                    href="https://www.anandmaratha.com/index.php"
                                    className="footer-logo"
                                >
                                    <img
                                        src="https://www.anandmaratha.com/wp-content/themes/weddingreval/img/footer/footer-logo.png"
                                        alt="Wedding-Reval"
                                        style={{ width: '82%', marginTop: '10px', marginBottom: '10px' }}
                                    />
                                </a>
                                <div className="center">
                                    <span className={`${styles.visitor_counter}`}>
                                        <img
                                            src="https://smallcounter.com/count.php?c_style=2&id=1505286050"
                                            alt="Visitor Counter"
                                        />
                                    </span>
                                </div>
                                <div className="center message" style={{ color: '#fff' }}>
                                    Visitor Counter
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Horoscope + Contact Info */}
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                            <div className="single-footer">
                                <h4 className="footr">
                                    <a
                                        href="https://www.anandmaratha.com/horoscope.php"
                                        style={{ color: '#fff' }}
                                    >
                                        Click here for Horoscope
                                    </a>
                                </h4>
                                <hr style={{ border: '1px dashed #c7c6c6' }} />

                                <h4 className="footr" style={{ color: '#fff' }}>
                                    <span>संचालक : सुहास शिर्के</span>
                                </h4>
                                <hr style={{ border: '1px dashed #c7c6c6' }} />

                                <h4 className="footr" style={{ color: '#fff' }}>
                                    <IoMailOutline />{' '}
                                    <span> contact@anandmaratha.com</span>
                                </h4>
                                <hr style={{ border: '1px dashed #c7c6c6' }} />

                                <h4 className="footr" style={{ color: '#fff' }}>
                                    <IoCall />{' '}
                                    <span>9822214005 / 9921501133</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-area">
                <div className="container">

                    {/* Desktop Footer Links */}
                    <div className="row desktop-view">
                        <div className="col-md-12">
                            <hr style={{ border: '1px dashed #c7c6c6' }} />
                            <ul className={`${styles.footer_links}`}>
                                {footerLinks.map((link, idx) => (
                                    <li key={idx} className={`${styles.footer_link}`}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <hr style={{ border: '1px dashed #c7c6c6' }} />
                        </div>
                    </div>

                    {/* Mobile Footer Links */}
                    <div className="row mobile-view" style={{ display: 'none' }}>
                        <hr style={{ border: '1px dashed #c7c6c6', margin: '0 15px' }} />

                        {[[
                            { label: 'Home', href: 'https://www.anandmaratha.com/index.php' },
                            { label: 'Rules', href: 'https://www.anandmaratha.com/rules.php' },
                            { label: 'Search', href: 'https://www.anandmaratha.com/search.php' },
                            { label: 'Enroll', href: 'https://www.anandmaratha.com/enroll.php' },
                            { label: 'Grooms', href: '/maratha-grooms/1' },
                            { label: 'Brides', href: '/maratha-brides/1' },
                            { label: 'Divorcee Grooms', href: '/maratha-divorcee-grooms/1' }
                        ], [
                            { label: 'Divorcee Brides', href: '/maratha-divorcee-brides/1' },
                            { label: 'Success Stories', href: 'https://www.anandmaratha.com/success_stories.php' },
                            { label: 'Response', href: 'https://www.anandmaratha.com/response.php' },
                            { label: 'Photo Edit', href: 'https://www.anandmaratha.com/photo_edit.php' },
                            { label: 'Contact Us', href: 'https://www.anandmaratha.com/contact.php' }
                        ]].map((col, i) => (
                            <div key={i} className="col-md-12 col-sm-6 col-xs-6">
                                <ul className="footer-links" style={{ marginBottom: '23px' }}>
                                    {col.map((link, idx) => (
                                        <li key={idx} className="footer-links">
                                            <a href={link.href}>{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <hr style={{ border: '1px dashed #c7c6c6', margin: '0 15px' }} />
                    </div>

                    {/* Bottom Left & Right Sections */}
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-left">
                            <div className="footer-bottom-left">
                                <p style={{ color: '#c1c1c1' }}>
                                    All Rights Reserved © Copyright 2009-2025 Anand Maratha<sup>®</sup>
                                </p>
                                <p style={{ color: '#c1c1c1', fontSize: '12px' }}>
                                    * This is marriage website & not for dating purpose.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right">
                            <div className="footer-bottom-right">
                                <ul className={`${styles.social_icons}`}>
                                    <li><a href="https://anandmarathamatrimony.blogspot.com/" title="Blog" target="_blank"><BsPencilSquare style={{ fontSize: 19 }} /></a></li>
                                    <li><a href="https://www.facebook.com/profile.php?id=61561703288801" target="_blank" title="Facebook"><FaFacebook /></a></li>
                                    <li><a href="https://twitter.com/suhas_shirke" target="_blank" title="Twitter"><FaTwitter /></a></li>
                                    <li><a href="https://www.instagram.com/anandmarathamatrimony/" target="_blank" title="Instagram"><FaInstagram /></a></li>
                                    <li><a href="https://www.youtube.com/watch?v=tUXfrMlWlSA&feature=youtu.be" target="_blank" title="YouTube"><FaYoutube /></a></li>
                                    <li><a href="https://www.linkedin.com/company/anand-maratha-vadhu-var-suchak-kendra/" target="_blank" title="LinkedIn"><FaLinkedin /></a></li>
                                    <li><a href="https://in.pinterest.com/anandmaratha1/" target="_blank" title="Pinterest"><FaPinterestSquare /></a></li>
                                    <li><a href="https://anandmaratha.tumblr.com" target="_blank" title="Tumblr"><FaTumblrSquare /></a></li>
                                </ul>

                                <span style={{ color: '#c1c1c1', fontSize: '12px', float: 'right' }}>
                                    * For privacy policy{' '}
                                    <a href="https://www.anandmaratha.com/privacy-policy.php" style={{ color: 'rgb(3, 169, 244)' }}>
                                        Click here.
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

const footerLinks = [
    { label: 'Home', href: 'https://www.anandmaratha.com/index.php' },
    { label: 'Rules', href: 'https://www.anandmaratha.com/rules.php' },
    { label: 'Enroll', href: 'https://www.anandmaratha.com/enroll.php' },
    { label: 'Matching Search', href: 'https://www.anandmaratha.com/search.php' },
    { label: 'Grooms', href: '/maratha-grooms/1' },
    { label: 'Brides', href: '/maratha-brides/1' },
    { label: 'Divorcee Grooms', href: '/maratha-divorcee-grooms/1' },
    { label: 'Divorcee Brides', href: '/maratha-divorcee-brides/1' },
    { label: 'Response', href: 'https://www.anandmaratha.com/response.php' },
    { label: 'Renew', href: 'https://www.anandmaratha.com/profile-renewal.php' },
    { label: 'Success Stories', href: 'https://www.anandmaratha.com/success_stories.php' },
    { label: 'Contact Us', href: 'https://www.anandmaratha.com/contact.php' },
]