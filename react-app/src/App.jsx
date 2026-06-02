import './App.css';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import Body from './components/layouts/Body/Body';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { useState } from 'react';
function App() {

  const data = [
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

  const [inputData, setInputData] = useState('');
  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };

  return (

    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <input type="text" value={inputData} onChange={inputChange} />
      </Body>

    </div>
    //
  );
}

export default App;