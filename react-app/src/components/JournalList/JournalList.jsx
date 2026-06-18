import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';

function JournalList({ items }) {

    if (items.length === 0) {
        return <p>Записей пока нет, добавьте первую</p>;
    }
    const sortItems = (a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return - 1;
    };

    return <>
        {items.sort(sortItems).map(journalItem =>
            <CardButton key={journalItem.id}>
                <JournalItem
                    title={journalItem.title}
                    text={journalItem.text}
                    date={journalItem.date}
                />
            </CardButton>)
        }
    </>;
}

export default JournalList;
