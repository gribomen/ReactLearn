import './Button.css';
function Button({ text }) {
	return (
		<button className='btn btn_primary'><span className='btnText'>{text}</span></button>
	);
}

export default Button;
