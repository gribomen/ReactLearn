import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import Body from './components/layouts/Body/Body';
import { useLocalStorage } from './hook/use-localstorage.hook';

function mapItems(items) {
  if (!items) {
    return [];
  }

  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }));

}

function App() {

  const [journalItems, setItems] = useLocalStorage('data');

  const addItem = item => {
    setItems([...mapItems(journalItems), {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: journalItems.length > 0 ? Math.max(...journalItems.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={mapItems(journalItems)} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;