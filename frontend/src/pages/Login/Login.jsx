import styles from './Login.module.css'

function Login() {

    return (
        <>
            <div className={styles['login-main-container']}>
                <div className={styles['login-form-container']}>
                    <div className={styles['login-form']}>
                        <h1>Login</h1>
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
                                    <label htmlFor="password">Password*</label>
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
                            <button type="submit" className={styles['login-submit-btn']}>
                                Login
                            </button>
                        </form>
                        <p className={styles['register-link']}>
                            Not registered yet? <a href="/register">Create an Account</a>
                        </p>
                    </div>
                </div>
                <div className={styles['login-img-container']}></div>
            </div>
        </>
    )
}

export default Login