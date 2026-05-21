//import React from 'react';

import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';

function App() {

  //return React.createElement('div', {}, React.createElement(
  //));


  return (
    //Вот это react.fragment нужен для обертки содержимого компонента.
    <>
      <h1>Заголовок</h1>
      <p>Какой-то текст</p>
      <Button />
      <JournalItem />
    </>
    //
  );
}

export default App;
