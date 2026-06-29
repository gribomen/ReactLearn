import './App.css';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './components/layouts/LeftPanel/LeftPanel';
import Body from './components/layouts/Body/Body';
import { useLocalStorage } from './hook/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

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
  const [selectedItem, setSelectedItem] = useState(null);



  const addItem = item => {
    if (!item.id) {
      setItems([...mapItems(journalItems), {
        ...item,
        date: new Date(item.date),
        id: journalItems.length > 0 ? Math.max(...journalItems.map(i => i.id)) + 1 : 1
      }]);
    } else {
      setItems([...mapItems(journalItems).map(i => {
        if (i.id === item.id) {
          return {
            ...item
          };
        }
        return i;
      })]);
    }
  };

  const deleteItem = (id) => {
    setItems([...journalItems.filter(i => i.id !== id)]);
  };

  return (
    <UserContextProvider>
      <div className='app'>
        <LeftPanel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null)} />
          <JournalList items={mapItems(journalItems)} setItem={setSelectedItem} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem} />
        </Body>
      </div>
    </UserContextProvider >
  );
}

export default App;