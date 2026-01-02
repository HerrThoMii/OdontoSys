import styles from './Navbar.module.css'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    return (
        <>
            <div className={styles['navbar-background']}></div>
            <div className={styles['navbar-divider']}></div>
            <div className={styles['container-navbar']}>
                <div className={styles['left-content']}>
                    <Link to="/" className={styles.logo}>OdontoSys</Link>
                </div>
                <div className={styles['right-content']}>
                    <button className={styles['login-btn']} onClick={handleLoginClick}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
