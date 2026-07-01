import type { FC } from 'react';
import type { IconButtonProps } from './IconButton.props';

export const IconButton: FC<IconButtonProps> = ({ icon, children, ...props }) => {
	return (
		<>
			<button {...props}>{icon}{children}</button>
		</>
	);
};

export default IconButton;