import { useRef, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import generalStyles from "../styles/UserGeneral.module.css";
import styles from "../styles/Auth.module.css";
import { EyeCloseIcon, EyeOpenIcon } from "../assets/icons";

const Login = () => {
    const formRef = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in both fields.");
            return;
        }

        try {
            setLoading(true);
            // Simulate login
            await new Promise((res) => setTimeout(res, 1000));

            // Fake login success check (you can replace with real API call)
            if (email === "admin@example.com" && password === "admin123") {
                alert("Login successful!");
                // Redirect or store token here
            } else {
                setError("Invalid email or password.");
            }
        } catch (err) {
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageHeader title="Login" backgroundImage="/images/user/page-banner/login.webp" />

            <div className={`${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <div className={`${styles.form_container} ${styles.login}`}>
                    <div className={styles.form_header}>
                        <h2>Login to Your Account</h2>
                    </div>

                    <form id="loginForm" ref={formRef} onSubmit={handleSubmit}>
                        <div className="row g-2">
                            <div className="col-md-12">
                                <label htmlFor="email" className={`${styles.form_label} form-label`}>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`${styles.form_control} form-control`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-12 mb-2">
                                <label htmlFor="password" className={`${styles.form_label} form-label`}>Password</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className={`${styles.form_control} form-control`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="input-group-text"
                                        onClick={() => setShowPassword(!showPassword)}
                                        tabIndex={-1}
                                    >
                                        {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
                                    </button>
                                </div>
                            </div>

                            <div className="col-12 d-flex align-items-center mt-2">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="me-2"
                                />
                                <label htmlFor="rememberMe" className={`${styles.form_label} form-label m-0`}>Remember Me</label>
                            </div>

                            {error && (
                                <div className="col-12">
                                    <div className="alert alert-danger py-2 px-3 mt-2">{error}</div>
                                </div>
                            )}

                            <div className="col-12 d-flex justify-content-center mt-3">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? "Logging in..." : "Login"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
