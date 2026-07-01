import { useEffect, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

function App() {
	//const [counter, setCounter] = useState<number>();

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};
	useEffect(() => { }, []);
	return (
		<>
			<Button onClick={addCounter} >Кнопка</Button>
			<Button appearence='big' onClick={addCounter} >Кнопка</Button>
			<Input placeholder='Email' />
			<div>
				<a href="/">Меню</a>
				<a href="/cart">Корзина</a>
			</div>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
