import type { FC } from 'react';
import styles from './HeaderNavPanel.module.css';
import type { HeaderNavPanelProps } from './HeaderNavPanel.props';

const HeaderNavPanel: FC<HeaderNavPanelProps> = ({ children }) => {
	return (
		<header className={styles['header-nav-panel']}><img src="../../../public/bookmark.svg" alt="Логотип" />{children}</header>
	);
};

export default HeaderNavPanel;
