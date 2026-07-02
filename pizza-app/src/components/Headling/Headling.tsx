import { type FC } from 'react';
import type { HeadlingProps } from './Headling.props';
import cn from 'classnames';
import styles from './Headling.module.css';

const Headling: FC<HeadlingProps> = ({ className, children, ...props }) => {
	return (
		<h1 className={cn(className, styles['h1'])} {...props}>{children}</h1>
	);
};

export default Headling;   