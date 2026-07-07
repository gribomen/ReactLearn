import { forwardRef } from 'react';
import type { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
	return (
		<input ref={ref} {...props} className={className} />
	);
});

export default Input;   