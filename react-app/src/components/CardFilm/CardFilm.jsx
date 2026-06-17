import './CardFilm.css';
function CardFilm({ url, nameAlt, name, isFavorites, count }) {
    return (
        <article className='card-film'>
            <img className='card-film_main-img' src={url} alt={nameAlt} />
            <div className='card-film_description'>
                <span>{name}</span>
                <div className='wrapper-favorites'>
                    <img src={isFavorites ? '../../public/favorite/bookmark.png' : '../../public/favorite/like.png'}
                        alt={isFavorites ? 'в избраном' : 'в избранное'} />
                    <span>{isFavorites ? 'В избраном' : 'В избранное'} </span>
                </div>
            </div>
            <div className="wrapper-count">
                <img src="../../public/star.svg" alt="Звезда" />
                <span>{count}</span>
            </div>
        </article>
    );
}

export default CardFilm;
