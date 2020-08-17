import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <ul className={styles.nav}>
            <li className={styles.navItem}><Link href='/'><a className={styles.navLink}>Index</a></Link></li>
            <li className={styles.navItem}><Link href='/about'><a className={styles.navLink}>About</a></Link></li>
        </ul>
    )
}

export default Nav