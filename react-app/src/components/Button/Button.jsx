import styles from './Button.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

const Button = forwardRef(function Button({ text, onClick }, ref) {
	return (
		<button ref={ref} className={cn(styles.btn, styles['btn_primary'])} onClick={onClick}>
			<span className={styles.btnText}>{text}</span>
		</button>
	);
});

export default Button;
