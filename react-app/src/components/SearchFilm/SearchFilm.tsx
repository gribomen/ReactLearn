import type { FC } from 'react';
import styles from './SearchFilm.module.css';
import type { SearchFilmProps } from './SearchFilm.props';

const SearchFilm: FC<SearchFilmProps> = ({ isIcon, placeholder, size }) => {
	let icon;
	if (isIcon) {
		icon = <img src="../../../public/search.svg" alt="Иконка поиска" />;
	}
	return (
		<div className={styles['wraper-search']}>
			{icon}
			<input className={styles.search} type="text" size={size} placeholder={placeholder} />
		</div>
	);
};

export default SearchFilm;