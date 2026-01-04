import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

function Login() {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        //For now just redirects, later add login validation
        navigate('/home')
    }

    return (
        <>
            <div className={styles['login-main-container']}>
                <div className={styles['login-card']}>
                    <div className={styles['login-form-container']}>
                        <div className={styles['login-form']}>
                            <h1>Dentist Login</h1>
                            <form>
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
                                <div className={styles['form-group']}>
                                    <div className={styles['password-label-row']}>
                                        <label htmlFor="password">Password</label>
                                        <a href="/password_reset" className={styles['forgot-password']}>Forgot password?</a>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Min. 8 character"
                                        required
                                    />
                                </div>
                                <button type="submit" onClick={handleLoginClick} className={styles['login-submit-btn']}>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={styles['login-img-container']}>
                        <div className={styles['img-content']}>
                            <div className={styles['img-text']}>
                                <h3>Dental Practice Management</h3>
                                <p>Manage your appointments, patient records, and treatment plans efficiently all in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login