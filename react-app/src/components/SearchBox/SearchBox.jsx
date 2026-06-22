import { useEffect, useState } from 'react';

function SearchBox() {

    const [count, setCount] = useState(0);
    const [query, setQuery] = useState('');

    const onChange = (e) => {
        setQuery(e.target.value);
    };
    const onClick = () => {
        setCount(count => count + 1);
    };

    useEffect(() => {
        console.log(`Счётчик запросов: ${count}`);
    }, [count]);

    useEffect(() => {
        console.log(`Поиск: ${query}`);
    }, [query]);
    return (
        <form>
            <input type="text" name="text" id="text" onChange={onChange} value={query} />
            <button type="button" onClick={onClick}>Найти</button>
            <p>{`Запросов выполнено: ${count}`}</p>
        </form>
    );
}

export default SearchBox;