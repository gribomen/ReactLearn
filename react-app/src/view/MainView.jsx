//import React from 'react';
import './MainView.css';
import Button from '../components/Button/Button';
import HeaderText from '../components/HeaderText/HeaderText';
import HeaderNavPanel from '../components/HeaderNavPanel/HeaderNavPanel';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import ItemBar from '../components/ItemBar/ItemBar';
import SearchFilm from '../components/SearchFilm/SearchFilm';
import ParagraphText from '../components/ParagraphText/ParagraphText';
import MainContent from '../components/MainContent/MainContent';
import PlaceCards from '../components/PlaceCards/PlaceCards';

function MainView() {
    const massFilms = [{
        url: './public/cards-film/black_widow.png',
        nameAlt: 'Картинка постера с фильмом Черная Вдова',
        name: 'Black Widow',
        isFavorites: false,
        count: 324
    },
    {
        url: './public/cards-film/shang-chi.png',
        nameAlt: 'Картинка постера с фильмом Шанг Чи легенда десяти колец',
        name: 'Shang Chi',
        isFavorites: false,
        count: 124
    },
    {
        url: './public/cards-film/loki.png',
        nameAlt: 'Картинка постера с фильмом Черная Вдова',
        name: 'Loki',
        isFavorites: false,
        count: 235
    },
    {
        url: './public/cards-film/how_i_met_your_mother.png',
        nameAlt: 'Картинка постера с фильмом How I Met Your Mother',
        name: 'How I Met Your Mother',
        isFavorites: false,
        count: 123
    },
    {
        url: './public/cards-film/money_heist.png',
        nameAlt: 'Картинка постера с фильмом Money Heist',
        name: 'Money Heist',
        isFavorites: true,
        count: 8125
    },
    {
        url: './public/cards-film/friends.png',
        nameAlt: 'Картинка постера с фильмом Friends',
        name: 'Friends',
        isFavorites: false,
        count: 123
    },
    {
        url: './public/cards-film/big_bang_theory.png',
        nameAlt: 'Картинка постера с фильмом The Big Bang Theory',
        name: 'The Big Bang Theory',
        isFavorites: false,
        count: 12
    },
    {
        url: './public/cards-film/two_and_half_men.png',
        nameAlt: 'Картинка постера с фильмом Two And a Half Men',
        name: 'Two And a Half Men',
        isFavorites: false,
        count: 456
    }];

    return (
        <div className="main">
            <HeaderNavPanel>
                <HeaderBar>
                    <ItemBar text={'Поиск фильмов'} active={'active'} />
                    <ItemBar text={'Мои фильмы'} icon='count' />
                    <ItemBar text={'Войти'} icon='exit' />
                </HeaderBar>
            </HeaderNavPanel>
            <MainContent>
                <>
                    <HeaderText
                        fontSize='32'
                        text='Поиск'
                    />
                    <ParagraphText
                        fontSize='16'
                        text='Введите название фильма, сериала или мультфильма для поиска и 
              добавления в избранное.'
                    />
                </>
                <div className='wrapper-search'>
                    <SearchFilm placeholder={'Введите название'} isIcon={true} size={40} />
                    <Button
                        text="Искать"
                    />
                </div>
                <PlaceCards massFilms={massFilms} />

            </MainContent>
        </div>
    );
}

export default MainView;
