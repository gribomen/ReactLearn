import type { FC } from 'react';
import styles from './HeaderBar.module.css';
import type { HeaderBarProps } from './HeaderBar.props';

const HeaderBar: FC<HeaderBarProps> = ({ children }) => {
	return (
		<nav className={styles['header-bar']}>{children}</nav>
	);
};

export default HeaderBar;
