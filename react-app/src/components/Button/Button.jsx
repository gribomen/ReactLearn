import styles from './Button.module.css';
import cn from 'classnames';

function Button({ text }) {
	return (
		<button className={cn(styles.btn, styles['btn_primary'])}>
			<span className={styles.btnText}>{text}</span>
		</button>
	);
}

export default Button;
