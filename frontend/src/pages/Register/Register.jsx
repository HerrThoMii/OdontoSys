import styles from './Register.module.css'

function Register() {
    return (
        <>
            <div className={styles['register-main-container']}>
                <div className={styles['register-card']}>
                    <div className={styles['register-form-container']}>
                        <div className={styles['register-form']}>
                            <h1>Patient Registration</h1>
                            <p className={styles['register-subtitle']}>Create your patient account</p>
                            <form>
                            {/* User Information */}
                            <div className={styles['form-row']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="first_name">First Name</label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        name="first_name"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="mail@website.com"
                                    required
                                />
                            </div>

                            <div className={styles['form-row']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Min. 8 characters"
                                        required
                                    />
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirm_password"
                                        name="confirm_password"
                                        placeholder="Confirm password"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Patient Specific Information */}
                            <div className={styles['section-divider']}>
                                <h3>Personal Information</h3>
                            </div>

                            <div className={styles['form-row']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="document_number">Document Number</label>
                                    <input
                                        type="text"
                                        id="document_number"
                                        name="document_number"
                                        placeholder="DNI/ID Number"
                                        required
                                    />
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="date_of_birth">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="date_of_birth"
                                        name="date_of_birth"
                                    />
                                </div>
                            </div>

                            <div className={styles['form-row']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <label htmlFor="address">Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    placeholder="Complete address"
                                    rows="2"
                                ></textarea>
                            </div>

                            {/* Health Insurance Information */}
                            <div className={styles['section-divider']}>
                                <h3>Health Insurance (Optional)</h3>
                            </div>

                            <div className={styles['form-row']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="health_insurance">Health Insurance</label>
                                    <select
                                        id="health_insurance"
                                        name="health_insurance"
                                    >
                                        <option value="">Select insurance</option>
                                        <option value="1">OSDE</option>
                                        <option value="2">Swiss Medical</option>
                                        <option value="3">Galeno</option>
                                    </select>
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="insurance_number">Insurance Number</label>
                                    <input
                                        type="text"
                                        id="insurance_number"
                                        name="insurance_number"
                                        placeholder="Member number"
                                    />
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className={styles['section-divider']}>
                                <h3>Emergency Contact (Optional)</h3>
                            </div>

                            <div className={styles['form-row']}>
                                <div className={styles['form-group']}>
                                    <label htmlFor="emergency_contact">Emergency Contact Name</label>
                                    <input
                                        type="text"
                                        id="emergency_contact"
                                        name="emergency_contact"
                                        placeholder="Contact name"
                                    />
                                </div>
                                <div className={styles['form-group']}>
                                    <label htmlFor="emergency_phone">Emergency Phone</label>
                                    <input
                                        type="tel"
                                        id="emergency_phone"
                                        name="emergency_phone"
                                        placeholder="Contact phone"
                                    />
                                </div>
                            </div>

                            <div className={styles['form-group']}>
                                <label htmlFor="medical_notes">Medical Notes</label>
                                <textarea
                                    id="medical_notes"
                                    name="medical_notes"
                                    placeholder="Any relevant medical information, allergies, etc."
                                    rows="3"
                                ></textarea>
                            </div>

                            <button type="submit" className={styles['register-submit-btn']}>
                                Create Patient Account
                            </button>
                        </form>
                        <p className={styles['login-link']}>
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </div>
                    <div className={styles['register-img-container']}>
                        <div className={styles['img-content']}>
                            <div className={styles['img-text']}>
                                <h3>Manage your dental health with ease</h3>
                                <p>Schedule appointments, track your treatments, and keep all your dental records in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register