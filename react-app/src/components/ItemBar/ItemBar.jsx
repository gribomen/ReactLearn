import './ItemBar.css';
function ItemBar({ text, icon = 'none', active = '' }) {
    let el;
    switch (icon) {
        case 'count': {
            el = <div className={'count-film hidden'} id="count-film"></div>;
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
        <div className={'item-bar ' + active}>{text}{el}</div>
    );
}

export default ItemBar;
