import Input from '../Input/Input';
import styles from './Search.module.css';
import cn from 'classnames';

function Search({ isIcon, placeholder, size, ref }) {
    let icon;
    if (isIcon) {
        icon = <img src="../../../public/search.svg" alt="Иконка поиска" />;
    }
    return (
        <div className={cn(styles['wraper-search'], {
            [styles['no_icon']]: !isIcon
        })}>
            {icon}
            <Input className={styles.search} type="text" size={size} placeholder={placeholder} ref={ref} />
        </div>
    );
}

export default Search;