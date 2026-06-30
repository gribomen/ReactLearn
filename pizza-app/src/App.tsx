import { useEffect, useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
	const [counter, setCounter] = useState<number>();

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};
	useEffect(() => { }, []);
	return (
		<>
			<Button onClick={addCounter} >Кнопка</Button>
			<Button appearence='big' onClick={addCounter} >Кнопка</Button>
			<Input placeholder='Email' />
		</>
	);
}

export default App;
