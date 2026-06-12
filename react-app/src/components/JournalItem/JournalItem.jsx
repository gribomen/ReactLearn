import './JournalItem.css';
function JournalItem({ title, date, text }) {
    const formatedDate = new Intl.DateTimeFormat('ru-RU', { day: '2-digit', year: 'numeric', month: '2-digit' })
        .format(date)
        .replace(/\./g, '/');
    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
<<<<<<< HEAD
                <div className="journal-item__date">{formatedDate}</div>
=======
                <div className="journal-item__date">{Intl.DateTimeFormat('ru-RU').format(date)}</div>
>>>>>>> lecture
                <div className="journal-item__text">{text}</div>
            </h2>
        </>
    );
}

export default JournalItem;
