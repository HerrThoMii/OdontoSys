import { Link } from 'react-router-dom'
import { Menu, Calendar, Users, ClipboardList } from 'lucide-react'
import styles from './Sidebar.module.css'

function Sidebar({ isCollapsed, setIsCollapsed }) {
    const handleToggle = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            <div className={styles.menuButton} onClick={handleToggle}>
                <Menu size={28} />
            </div>
            
            <nav className={styles.nav}>
                <Link to="/agenda" className={styles.navItem}>
                    <Calendar className={styles.icon} size={22} />
                    <span className={styles.navText}>Agenda</span>
                </Link>
                
                <Link to="/pacientes" className={styles.navItem}>
                    <Users className={styles.icon} size={22} />
                    <span className={styles.navText}>Pacientes</span>
                </Link>
                
                <Link to="/tratamientos" className={styles.navItem}>
                    <ClipboardList className={styles.icon} size={22} />
                    <span className={styles.navText}>Tratamientos</span>
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar