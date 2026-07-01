import { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState<number>(0);
	const step = 1;
	return (
		<>
			<button onClick={() => setCounter(prev => prev + step)}>+</button>
			<button onClick={() => setCounter(prev => prev - step)}>-</button>
			<div>{counter}</div>
		</>
	);
};

export default Counter;