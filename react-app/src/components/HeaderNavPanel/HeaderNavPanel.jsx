import './HeaderNavPanel.css';
function HeaderNavPanel({ children }) {
    return (
        <header className='header-nav-panel'><img src="../../../public/bookmark.svg" alt="Логотип" />{children}</header>
    );
}

export default HeaderNavPanel;
