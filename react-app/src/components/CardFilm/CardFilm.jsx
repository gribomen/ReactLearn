import styles from './CardFilm.module.css';

function CardFilm({ url, nameAlt, name, isFavorites, count }) {
    return (
        <article className={styles['card-film']}>
            <img className={styles['card-film__main-img']} src={url} alt={nameAlt} />
            <div className={styles['card-film__description']} >
                <span>{name}</span>
                <div className={styles['wrapper-favorites']}>
                    <img src={isFavorites ? '../../public/favorite/bookmark.png' : '../../public/favorite/like.png'}
                        alt={isFavorites ? 'в избраном' : 'в избранное'} />
                    <span>{isFavorites ? 'В избраном' : 'В избранное'} </span>
                </div>
            </div>
            <div className={styles['wrapper-count']}>
                <img src="../../public/star.svg" alt="Звезда" />
                <span>{count}</span>
            </div>
        </article>
    );
}

export default CardFilm;
