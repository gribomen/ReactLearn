//import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import HeaderText from './components/HeaderText/HeaderText';


function App() {


  return (
    <>
      <HeaderText
        fontSize='32'
        text='Поиск'
      />
      <Button
        text="Искать"
      />
    </>
  );
}

export default App;
