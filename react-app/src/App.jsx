import { useState } from 'react';
import './App.css';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import Body from './components/layouts/Body/Body';

const INITIAL_ITEM = [
  {
    title: 'Подготовка к обновлению курсов',
    date: new Date(),
    text: 'Горные походы открывают удивительные природные ландшафты'
  },
  {
    title: 'Поход в годы',
    date: new Date(),
    text: 'Думал, что очень много времени'
  }
];

function App() {

  const [journalItems, setItems] = useState(INITIAL_ITEM);
  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date)
    }]);
  };
  return (

    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {journalItems.map(journalItem =>
            <CardButton>
              <JournalItem
                title={journalItem.title}
                text={journalItem.text}
                date={journalItem.date}
              />
            </CardButton>)}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>

    </div>

  );
}

export default App;