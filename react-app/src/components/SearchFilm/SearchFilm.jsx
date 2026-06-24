import styles from './SearchFilm.module.css';

function SearchFilm({ isIcon, placeholder, size }) {
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
}

export default SearchFilm;