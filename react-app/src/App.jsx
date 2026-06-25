import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import Body from './components/layouts/Body/Body';
import { useLocalStorage } from './hook/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';

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
  console.log('App');
  const [journalItems, setItems] = useLocalStorage('data');

  const addItem = item => {
    setItems([...mapItems(journalItems), {
      ...item,
      date: new Date(item.date),
      id: journalItems.length > 0 ? Math.max(...journalItems.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <UserContextProvider>
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
    </UserContextProvider >
  );
}

export default App;