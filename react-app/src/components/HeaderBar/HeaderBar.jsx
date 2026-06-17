import './HeaderBar.css';
function HeaderBar({ children }) {
    return (
        <nav className='header-bar'>{children}</nav>
    );
}

export default HeaderBar;
