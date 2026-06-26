import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items, setItem }) {
    const { userId } = useContext(UserContext);
    const sortItems = (a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return - 1;
    };

    const filteredItems = useMemo(() => {
        return items
            .filter(el => el.userId === userId)
            .sort(sortItems);
    }, [items, userId]);

    if (items.length === 0) {
        return <p>Записей пока нет, добавьте первую</p>;
    }


    return <>
        {filteredItems
            .map(journalItem =>
                <CardButton key={journalItem.id} onClick={() => setItem(journalItem)}>
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
