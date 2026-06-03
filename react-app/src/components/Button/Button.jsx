import './Button.css';
import { useState } from 'react';
function Button() {
	const [state, setState] = useState('Старт');
	const clickButton = () => {
		console.log(state);
		if (state === 'Старт') {
			setState('Стоп');
		} else {
			setState('Старт');
		}
	};

	return (
		<>
			<button className='button accent' onClick={clickButton}>{state}</button>
		</>
	);
}

export default Button;
