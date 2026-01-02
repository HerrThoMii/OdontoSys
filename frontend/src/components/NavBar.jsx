import './NavBar.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="navbar-background"></div>
            <div className="navbar-divider"></div>
            <div className="container-navbar">
                <div className="left-content">
                    <h1 className="logo">OdontoSys</h1>
                </div>
                <div className="right-content">
                    <button className="login-btn" onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </>
    )
}

export default NavBar