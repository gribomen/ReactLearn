import styles from './PlaceCards.module.css';
import CardFilm from '../CardFilm/CardFilm';
import type { FC } from 'react';
import type { PlaceCardsProps } from './PlaceCards.props';
import { NavLink } from 'react-router-dom';

const PlaceCards: FC<PlaceCardsProps> = ({ massFilms }) => {
	return (
		<div className={styles['place-card']}>
			{massFilms.map(films => {
				return <NavLink to={`/movie/${films.id}`} key={films.id}>
					<CardFilm url={films.url}
						nameAlt={films.nameAlt}
						name={films.name} isFavorites={films.isFavorites}
						count={films.count}/>
				</NavLink>;
			})
			}
		</div>
	);
};

export default PlaceCards;