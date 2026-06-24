import styles from './ParagraphText.module.css';
import cn from 'classnames';

function ParagraphText({ fontSize, text }) {
    return (
        <p className={cn(styles['p-text'], styles[`fs${fontSize}`])} style={{ whiteSpace: 'pre-line' }}>{text}</p>
    );
}

export default ParagraphText;
