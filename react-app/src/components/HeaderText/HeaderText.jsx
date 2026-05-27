import './HeaderText.css';
function HeaderText({ fontSize, text }) {

    return (
        <span className={`header fs${fontSize}`}>{text}</span>
    );
}

export default HeaderText;
