import styles from './ItemBar.module.css';
import cn from 'classnames';


function ItemBar({ text, icon = 'none', active = '' }) {
    let el;
    switch (icon) {
        case 'count': {
            el = <div className={cn(styles['count-film'], styles.hidden)} id="count-film"></div>;
            break;
        }
        case 'exit': {
            el = <img src="../../../public/exit.svg" alt="Иконка выхода" srcset="" />;
            break;
        }
        case 'profile': {
            el = <img src="../../../public/user-profile.svg" alt="Иконка выхода" srcset="" />;
            break;
        }
    }
    return (
        <div className={cn(styles['item-bar'], styles[active])}>{text}{el}</div>
    );
}

export default ItemBar;
