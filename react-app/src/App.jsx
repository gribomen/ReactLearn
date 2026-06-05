//import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import HeaderText from './components/HeaderText/HeaderText';
import MainView from './view/MainView';
import HeaderNavPanel from './components/HeaderNavPanel/HeaderNavPanel';
import HeaderBar from './components/HeaderBar/HeaderBar';
import ItemBar from './components/ItemBar/ItemBar';
import SearchFilm from './components/SearchFilm/SearchFilm';

function App() {


  return (
    <>
      <MainView>
        <HeaderNavPanel>
          <HeaderBar>
            <ItemBar text={'Поиск фильмов'} active={'active'} />
            <ItemBar text={'Мои фильмы'} icon='count' />
            <ItemBar text={'Войти'} icon='exit' />
          </HeaderBar>
        </HeaderNavPanel>
        <SearchFilm placeholder={'Введите название'} isIcon={true} />
        <HeaderText
          fontSize='32'
          text='Поиск'
        />
        <Button
          text="Искать"
        />
      </MainView>

    </>
  );
}

export default App;
