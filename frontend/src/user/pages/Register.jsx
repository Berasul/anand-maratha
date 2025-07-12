import { useEffect, useRef, useState } from "react";
import PageHeader from '../components/common/PageHeader';
import generalStyles from '../styles/UserGeneral.module.css'
import styles from '../styles/Auth.module.css';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedSkills, setSelectedSkills] = useState(new Set());
    const [resumeFile, setResumeFile] = useState(null);
    const formRef = useRef(null);

    const [hasDisability, setHasDisability] = useState(false);
    const [disabilityDetail, setDisabilityDetail] = useState("");

    const totalSteps = 4;

    const handleSkillToggle = (skill) => {
        const updatedSkills = new Set(selectedSkills);
        if (updatedSkills.has(skill)) updatedSkills.delete(skill);
        else updatedSkills.add(skill);
        setSelectedSkills(updatedSkills);
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        setResumeFile(e.dataTransfer.files[0]);
    };

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const validateStep = () => {
        const form = formRef.current;
        const stepElement = form.querySelector(`[data-step="${currentStep}"]`);
        const requiredInputs = stepElement.querySelectorAll("input[required], select[required]");
        let valid = true;

        requiredInputs.forEach((input) => {
            if (!input.value.trim()) {
                input.classList.add("is-invalid");
                valid = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (currentStep === 2 && selectedSkills.size === 0) {
            alert("Please select at least one skill");
            valid = false;
        }

        if (currentStep === 3 && !resumeFile) {
            alert("Please upload your resume");
            valid = false;
        }

        return valid;
    };

    const handleNext = () => {
        if (validateStep() && currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep()) {
            const formData = new FormData(formRef.current);
            formData.append("skills", Array.from(selectedSkills).join(","));
            formData.append("resume", resumeFile);

            const plainData = Object.fromEntries(formData.entries());
            console.log("Form submitted:", plainData);
            alert("Application submitted successfully!");

            // Reset logic
            formRef.current.reset();
            setCurrentStep(1);
            setSelectedSkills(new Set());
            setResumeFile(null);
        }
    };

    const renderUploadText = () => {
        if (resumeFile) {
            return (
                <>
                    <p className="mb-1">{resumeFile.name}</p>
                    <p className="text-muted small">Click or drag to change file</p>
                </>
            );
        }
        return (
            <>
                <p className="mb-1">Drag and drop your resume here</p>
                <p className="text-muted small">or click to browse (PDF, DOC, DOCX)</p>
            </>
        );
    };

    useEffect(() => {
        if (formRef.current) {
            const top = formRef.current.getBoundingClientRect().top + window.pageYOffset - 400;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, [currentStep]);

    return (
        <>
            <PageHeader
                title="Register"
                backgroundImage="/images/user/page-banner/register.webp"
            />
            <div className={`${generalStyles.side_space} ${generalStyles.vertical_space}`}>
                <div className={`${styles.form_container}`}>
                    <div className={`${styles.form_header}`}>
                        <h2>Register Now</h2>
                        <p className="text-muted">We're excited to learn more about you</p>
                    </div>

                    <div className={styles.progress}>
                        <div
                            className={styles.progress_bar}
                            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                        />
                    </div>

                    <div className={`${styles.step_indicator}`}>
                        {[1, 2, 3, 4].map((step, index) => (
                            <>
                                {index !== 0 && (
                                    <div
                                        key={`line-${index}`}
                                        className={`${styles.step_line} ${step < currentStep ? styles.completed : ""}`}
                                    />
                                )}
                                <div
                                    key={`circle-${step}`}
                                    className={`${styles.step_circle} ${step === currentStep ? styles.active : step < currentStep ? styles.completed : ""}`}
                                    onClick={() => setCurrentStep(step)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {step}
                                </div>
                            </>
                        ))}
                    </div>

                    <form id="multiStepForm" ref={formRef} onSubmit={handleSubmit}>
                        {/* Step 1 */}
                        <div className={`${styles.form_step} ${styles.active} form-step`} data-step="1"
                            style={{ display: currentStep !== 1 && 'none' }}
                        >
                            <h3 className="mb-4">Basic Information</h3>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className={`${styles.form_label} form-label`}>First Name</label>
                                    <input type="text" id="firstName" className={`${styles.form_control} form-control`} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className={`${styles.form_label} form-label`}>Last Name</label>
                                    <input type="text" id="lastName" className={`${styles.form_control} form-control`} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className={`${styles.form_label} form-label`}>Email Address</label>
                                    <input type="email" id="email" className={`${styles.form_control} form-control`} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className={`${styles.form_label} form-label`}>Phone Number</label>
                                    <input type="tel" id="phone" className={`${styles.form_control} form-control`} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="dob" className={`${styles.form_label} form-label`}>Date of Birth</label>
                                    <input type="date" id="dob" className={`${styles.form_control} form-control`} required />
                                </div>
                                <div className="col-md-6">
                                    <label className={`${styles.form_label} form-label`}>Height</label>
                                    <div className="d-flex gap-2">
                                        <select id="heightFeet" className={`${styles.form_select} form-select`} required>
                                            <option value="">Feet</option>
                                            {[...Array(8)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1} ft</option>
                                            ))}
                                        </select>
                                        <select id="heightInches" className={`${styles.form_select} form-select`} required>
                                            <option value="">Inches</option>
                                            {[...Array(12)].map((_, i) => (
                                                <option key={i} value={i}>{i} in</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="weight" className={`${styles.form_label} form-label`}>Weight (kg)</label>
                                    <input type="number" id="weight" className={`${styles.form_control} form-control`} required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="maritalStatus" className={`${styles.form_label} form-label`}>Marital Status</label>
                                    <select id="maritalStatus" className={`${styles.form_select} form-select`} required>
                                        <option value="">Select</option>
                                        <option value="single">Single</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            id="hasDisability"
                                            className="form-check-input"
                                            checked={hasDisability}
                                            onChange={(e) => setHasDisability(e.target.checked)}
                                        />
                                        <label htmlFor="hasDisability" className={`${styles.form_label} form-check-label`}>
                                            Do you have any physical disabilities?
                                        </label>
                                    </div>
                                </div>

                                {hasDisability && (
                                    <div className="col-md-12 mt-3">
                                        <label htmlFor="disabilityDetail" className={`${styles.form_label} form-label`}>
                                            Please specify your disability
                                        </label>
                                        <input
                                            type="text"
                                            id="disabilityDetail"
                                            value={disabilityDetail}
                                            onChange={(e) => setDisabilityDetail(e.target.value)}
                                            className={`${styles.form_control} form-control`}
                                            required
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="d-flex justify-content-end mt-4">
                                <button type="button" className="btn btn-primary" onClick={handleNext}>Continue</button>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`${styles.form_step} ${currentStep === 2 ? styles.active : ''}`} data-step="2"
                            style={{ display: currentStep !== 2 && 'none' }}>
                            <h3 className="mb-4">Professional Experience</h3>
                            <div className="mb-4">
                                <label htmlFor="currentRole" className={`${styles.form_label} form-label`}>Current Role</label>
                                <input type="text" id="currentRole" className={`${styles.form_control} form-control`} required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="experience" className={`${styles.form_label} form-label`}>Years of Experience</label>
                                <select id="experience" className={`${styles.form_select} form-select`} required>
                                    <option value="">Select experience</option>
                                    {["0-2", "3-5", "5-10", "10+"].map(val => <option key={val} value={val}>{val} years</option>)}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className={`${styles.form_label} form-label`}>Key Skills</label>
                                <div className={`${styles.skill_tags}`}>
                                    {["javascript", "python", "react", "node", "aws", "docker"].map(skill => (
                                        <div
                                            key={skill}
                                            className={`${styles.skill_tag} ${selectedSkills.has(skill) ? styles.selected : ""}`}
                                            onClick={() => handleSkillToggle(skill)}
                                        >
                                            {skill.charAt(0).toUpperCase() + skill.slice(1)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
                                <button type="button" className="btn btn-primary" onClick={handleNext}>Continue</button>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={`${styles.form_step} ${currentStep === 3 ? styles.active : ''}`} data-step="3"
                            style={{ display: currentStep !== 3 && 'none' }}
                        >
                            <h3 className="mb-4">Portfolio & Resume</h3>
                            <div className="mb-4">
                                <label htmlFor="portfolio" className={`${styles.form_label} form-label`}>Portfolio URL</label>
                                <input type="url" id="portfolio" className={`${styles.form_control} form-control`} placeholder="https://your-portfolio.com" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="linkedin" className={`${styles.form_label} form-label`}>LinkedIn Profile</label>
                                <input type="url" id="linkedin" className={`${styles.form_control} form-control`} placeholder="https://linkedin.com/in/your-profile" />
                            </div>
                            <div className="mb-4">
                                <label className={`${styles.form_label} form-label`}>Resume Upload</label>
                                <div
                                    className={`${styles.file_upload} file-upload`}
                                    onClick={() => document.getElementById("resume").click()}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleFileDrop}
                                >
                                    <input
                                        type="file"
                                        id="resume"
                                        className="d-none"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                    />
                                    <div className="upload-content">
                                        {renderUploadText()}
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
                                <button type="button" className="btn btn-primary" onClick={handleNext}>Continue</button>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className={`${styles.form_step} ${currentStep === 4 ? styles.active : ''}`} data-step="4"
                            style={{ display: currentStep !== 4 && 'none' }}
                        >
                            <h3 className="mb-4">Additional Information</h3>
                            <div className="mb-4">
                                <label htmlFor="availability" className={`${styles.form_label} form-label`}>When can you start?</label>
                                <select id="availability" className={`${styles.form_select} form-select`} required>
                                    <option value="">Select availability</option>
                                    {["immediately", "2-weeks", "1-month", "other"].map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="salaryExpectation" className={`${styles.form_label} form-label`}>Salary Expectation</label>
                                <select id="salaryExpectation" className={`${styles.form_select} form-select`} required>
                                    <option value="">Select range</option>
                                    {["40-60k", "60-80k", "80-100k", "100k+"].map(val => <option key={val} value={val}>${val}</option>)}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="additionalInfo" className={`${styles.form_label} form-label`}>Additional Information</label>
                                <textarea className={`${styles.form_control} form-control`} id="additionalInfo" rows="4" placeholder="Tell us anything else you'd like us to know..."></textarea>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button type="button" className="btn btn-secondary" onClick={handlePrev}>Back</button>
                                <button type="submit" className="btn btn-success">Submit Application</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
