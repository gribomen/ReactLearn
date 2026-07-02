import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, isValid = true, ...props }, ref) => {
	return (
		<input ref={ref} {...props} className={cn(className, styles['input'], {
			[styles['invalid']]: !isValid
		})} {...props} />
	);
});

export default Input;   