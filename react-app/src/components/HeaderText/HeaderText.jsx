import styles from './HeaderText.module.css';
import cn from 'classnames';
function HeaderText({ fontSize, text }) {

    return (
        <span className={cn(styles.header, styles[`fs${fontSize}`])}>{text}</span>
    );
}

export default HeaderText;
