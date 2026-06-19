import styles from './HeaderBar.module.css';

function HeaderBar({ children }) {
    return (
        <nav className={styles['header-bar']}>{children}</nav>
    );
}

export default HeaderBar;
