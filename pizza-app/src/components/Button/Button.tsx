import type { ButtonProps } from './Button.props';

function Button({ children, disabled }: ButtonProps) {

	return (
		<button disabled={disabled}>{children}</button>
	);
}

export default Button;