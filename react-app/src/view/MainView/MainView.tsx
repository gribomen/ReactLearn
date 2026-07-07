//import React from 'react';
import styles from './MainView.module.css';
import Button from '../../components/Button/Button';
import HeaderText from '../../components/HeaderText/HeaderText';
import Search from '../../components/Search/Search';
import ParagraphText from '../../components/ParagraphText/ParagraphText';
import MainContent from '../../components/MainContent/MainContent';
import PlaceCards from '../../components/PlaceCards/PlaceCards';
import type { ICardFilm } from '../../types/CardFilm';
function MainView() {
	const massFilms: ICardFilm[] = [{
		id: 1,
		url: './public/cards-film/black_widow.png',
		nameAlt: 'Картинка постера с фильмом Черная Вдова',
		name: 'Black Widow',
		isFavorites: false,
		count: 324
	},
	{
		id: 2,
		url: './public/cards-film/shang-chi.png',
		nameAlt: 'Картинка постера с фильмом Шанг Чи легенда десяти колец',
		name: 'Shang Chi',
		isFavorites: false,
		count: 124
	},
	{
		id: 3,
		url: './public/cards-film/loki.png',
		nameAlt: 'Картинка постера с фильмом Черная Вдова',
		name: 'Loki',
		isFavorites: false,
		count: 235
	},
	{
		id: 4,
		url: './public/cards-film/how_i_met_your_mother.png',
		nameAlt: 'Картинка постера с фильмом How I Met Your Mother',
		name: 'How I Met Your Mother',
		isFavorites: false,
		count: 123
	},
	{
		id: 5,
		url: './public/cards-film/money_heist.png',
		nameAlt: 'Картинка постера с фильмом Money Heist',
		name: 'Money Heist',
		isFavorites: true,
		count: 8125
	},
	{
		id: 6,
		url: './public/cards-film/friends.png',
		nameAlt: 'Картинка постера с фильмом Friends',
		name: 'Friends',
		isFavorites: false,
		count: 123
	},
	{
		id: 7,
		url: './public/cards-film/big_bang_theory.png',
		nameAlt: 'Картинка постера с фильмом The Big Bang Theory',
		name: 'The Big Bang Theory',
		isFavorites: false,
		count: 12
	},
	{
		id: 8,
		url: './public/cards-film/two_and_half_men.png',
		nameAlt: 'Картинка постера с фильмом Two And a Half Men',
		name: 'Two And a Half Men',
		isFavorites: false,
		count: 456
	}];

	return (
		<MainContent>
			<>
				<HeaderText
					fontSize='64'
					text='Поиск'
				/>
				<ParagraphText
					fontSize='16'
					text='Введите название фильма, сериала или мультфильма для поиска и 
        добавления в избранное.'
				/>
			</>
			<div className={styles['wrapper-search']}>
				<Search placeholder={'Введите название'} isIcon={true} size={37} />
				<Button
					text="Искать"
				/>
			</div>
			<PlaceCards massFilms={massFilms} />

		</MainContent>
	);
}

export default MainView;
