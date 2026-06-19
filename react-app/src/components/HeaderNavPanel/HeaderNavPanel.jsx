import styles from './HeaderNavPanel.module.css';
function HeaderNavPanel({ children }) {
    return (
        <header className={styles['header-nav-panel']}><img src="../../../public/bookmark.svg" alt="Логотип" />{children}</header>
    );
}

export default HeaderNavPanel;
