import { useEffect, useState } from 'react';

function AutoHideMessage() {
    const message = 'Сообщение появилось!';
    const message2 = 'Сообщение скрыто';
    const [visible, setVisiable] = useState(true);

    useEffect(() => {
        let timerId;

        timerId = setTimeout(() => {
            setVisiable(false);
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <p>{visible ? message : message2}</p>
    );
}

export default AutoHideMessage;
