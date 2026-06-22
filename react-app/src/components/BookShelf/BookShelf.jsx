import './BookShelf.module.css';
import { useEffect, useState } from 'react';
const initialBooks = ['Мастер и Маргарита', 'Преступление и наказание'];

function BookShelf() {

    const [books, booksSet] = useState(initialBooks);
    const addBook = () => {
        booksSet([...books, 'Новая книга']);
    };
    useEffect(() => {
        if (books.length === 0) {
            return;
        }
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <form>
            <ul>
                {books.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
            <button type='button' onClick={addBook}>{'Добавить книгу'}</button>
        </form>
    );
}

export default BookShelf;