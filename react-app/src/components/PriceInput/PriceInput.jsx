import { useRef, useState } from 'react';

function PriceInput() {

    const [cost, setCost] = useState('');
    const [error, setError] = useState(false);
    const ref = useRef();


    const onChange = () => {
        setCost(ref.current.value);
    };
    const onClick = () => {
        if (ref.current.value === '') {
            setError(true);
            ref.current.focus();
        } else {
            setError(false);
        }
    };
    return (
        <form>
            <input type="text" name="text" id="text" onChange={onChange} placeholder="Введите цену" ref={ref} value={cost} />
            <button type="button" onClick={onClick}>Подтвердить</button>
            <p style={{ display: error ? 'block' : 'none' }}> Ошибка: поле цены не может быть пустым</p>
        </form>

    );
}

export default PriceInput;