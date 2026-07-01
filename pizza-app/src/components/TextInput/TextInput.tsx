import type { FC } from 'react';
import type { TextInputProps } from './TextInput.props';

const TextInput: FC<TextInputProps> = ({ value, onChange, placeholder }) => {

	return (
		<input onChange={onChange} placeholder={placeholder} >{value}</input>
	);
};


export default TextInput;