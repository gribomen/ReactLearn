import styles from './PlaceCards.module.css';
import CardFilm from '../CardFilm/CardFilm';

function PlaceCards({ massFilms }) {
    return (
        <div className={styles['place-card']}>
            {massFilms.map(films => {
                return <CardFilm url={films.url}
                    nameAlt={films.nameAlt}
                    name={films.name} isFavorites={films.isFavorites}
                    count={films.count} key={films.id} />;
            })
            }
        </div>
    );
}

export default PlaceCards;
