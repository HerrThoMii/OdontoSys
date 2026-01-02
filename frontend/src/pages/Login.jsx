import './Login.css'

function Login() {
    return (
        <>
            <div className="login-main-container">
                <div className="login-form-container">
                    <div className="login-form">
                        <h1>Login</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="mail@website.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password*</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Min. 8 character"
                                    required
                                />
                            </div>
                            <div className="form-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="forgot-password">Forget password?</a>
                            </div>
                            <button type="submit" className="login-submit-btn">
                                Login
                            </button>
                        </form>
                        <p className="register-link">
                            Not registered yet? <a href="#">Create an Account</a>
                        </p>
                    </div>
                </div>
                <div className="login-img-container"></div>
            </div>
        </>
    )
}

export default Login