import styles from './ItemBar.module.css';
import cn from 'classnames';


function ItemBar({ text, icon = 'none', active = '', onClick }) {
    let el;
    switch (icon) {
        case 'count': {
            el = <div className={cn(styles['count-film'], styles.hidden)} id="count-film"></div>;
            break;
        }
        case 'exit': {
            el = <img src="../../../public/exit.svg" alt="Иконка выхода" />;
            break;
        }
        case 'profile': {
            el = <img src="../../../public/user-profile.svg" alt="Иконка выхода" />;
            break;
        }
    }
    return (
        <div className={cn(styles['item-bar'], styles[active])} onClick={onClick}>{text}{el}</div>
    );
}

export default ItemBar;
