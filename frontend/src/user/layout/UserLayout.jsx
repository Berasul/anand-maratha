import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import styles from '../styles/UserGeneral.module.css'
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const UserLayout = () => {
    const location = useLocation();
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div id="user_layout" className={`${styles.wrapper}`}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {showButton && (
                <button onClick={scrollToTop} className={styles.scrollTopBtn}>
                    <IoIosArrowUp />
                </button>
            )}
        </div>
    );
};

export default UserLayout;
