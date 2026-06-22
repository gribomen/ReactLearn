import './App.css';
import AutoHideMessage from './components/AutoHideMessage/AutoHideMessage';
import NoteEditor from './components/NoteEditor/NoteEditor';

function App() {

  return (
    <div className='app'>
      <AutoHideMessage />
      <NoteEditor />
    </div>
  );
}

export default App;