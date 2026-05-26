import './JournalItem.css';
function JournalItem() {
    const title = 'Моя первая заметка';
    const body = 'Сегодня изучаю React компоненты';
    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <p className="journal-item__body">
                {body}
            </p>
        </>
    );
}

export default JournalItem;
