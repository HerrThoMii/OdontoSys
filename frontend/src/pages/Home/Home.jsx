import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './Home.module.css'

function Home() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={styles.container}>
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`${styles.content} ${isCollapsed ? styles.contentCollapsed : ''}`}>
                <h1>Bienvenido al Sistema Odontológico</h1>
            </div>
        </div>
    )
}

export default Home