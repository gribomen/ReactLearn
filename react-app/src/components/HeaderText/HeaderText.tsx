import styles from './HeaderText.module.css';
import cn from 'classnames';
import type { HeaderTextProps } from './HeaderText.props';
import type { FC } from 'react';

const HeaderText: FC<HeaderTextProps> = ({ fontSize, text }) => {
	return (
		<span className={cn(styles.header, {
			[styles.fs32]: fontSize === '32',
			[styles.fs64]: fontSize === '64'
		})}>{text}</span>
	);
};

export default HeaderText;
