import type { FC } from 'react';
import styles from './MainContent.module.css';
import type { MainContentProps } from './MainContent.props';

const MainContent: FC<MainContentProps> = ({ children }) => {
	return (
		<main className={styles['main-content']}>{children}</main>
	);
};

export default MainContent;
