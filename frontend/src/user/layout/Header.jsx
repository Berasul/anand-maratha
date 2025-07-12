import { Link } from 'react-router-dom';
import { LoginIcon, RegisterIcon } from '../assets/icons';
import styles from '../styles/UserGeneral.module.css';

const Header = () => {
    const menuItems = [
        { name: "Home", to: "/" },
        { name: "Rules", to: "/rules" },
        {
            name: "Profile",
            dropdown: true,
            items: [
                { name: "Maratha Unmarried Grooms", to: "/profile/unmarried-grooms" },
                { name: "Maratha Unmarried Brides", to: "/profile/unmarried-brides" },
                { name: "Maratha Divorcee Grooms", to: "/profile/divorcee-grooms" },
                { name: "Maratha Divorcee Brides", to: "/profile/divorcee-brides" },
            ],
        },
        { name: "Horoscope", to: "/horoscope" },
        { name: "Success Stories", to: "/success-stories" },
        { name: "Contact Us", to: "/contact" },
    ];

    return (
        <header className={`${styles.header} ${styles.side_space}`}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="Logo" height="65" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {menuItems.map((item, idx) =>
                                item.dropdown ? (
                                    <li className="nav-item dropdown" key={idx}>
                                        <Link
                                            className={`${styles.header_link} nav-link dropdown-toggle position-relative`}
                                            href="#"
                                            id={`dropdown-${idx}`}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {item.name}<span className={`ms-1 dropdown-arrow`} />
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby={`dropdown-${idx}`}>
                                            {item.items.map((subItem, subIdx) => (
                                                <li key={subIdx}>
                                                    <Link className="dropdown-item" to={subItem.to}>
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li className="nav-item" key={idx}>
                                        <Link className={`${styles.header_link} nav-link`} to={item.to}>
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className={`${styles.header_end}`}>
                        <Link to="/login" className={`${styles.page_btn}`}>
                            Login <LoginIcon />
                        </Link>
                        <Link to="/register" className={`${styles.page_btn} ${styles.page_btn_2}`}>
                            Register <RegisterIcon />
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
