import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const INITIAL_STATE = {
    title: true,
    text: true,
    date: true
};
function JournalForm({ onSubmit }) {
    const [formValideState, setValidState] = useState(INITIAL_STATE);

    useEffect(() => {
        let timerId;
        console.log('Очистка состояния');
        if (!formValideState.date || !formValideState.text || !formValideState.title) {
            timerId = setTimeout(() => {
                setValidState(INITIAL_STATE);
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [formValideState]);
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title?.trim().length) {
            setValidState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setValidState(state => ({ ...state, title: true }));
        }

        if (!formProps.text?.trim().length) {
            setValidState(state => ({ ...state, text: false }));
            isFormValid = false;
        } else {
            setValidState(state => ({ ...state, text: true }));
        }

        if (!formProps.date) {
            setValidState(state => ({ ...state, date: false }));
            isFormValid = false;
        } else {
            setValidState(state => ({ ...state, date: true }));
        }

        if (!isFormValid) {
            return;
        }

        onSubmit(formProps);
    };

    return (
        <form className={`${styles['journal-form']}`} onSubmit={addJournalItem}>
            <div>
                <input type="text" name='title' className={cn(styles['input'], styles['input-title'], {
                    [styles['invalid']]: !formValideState.title
                })} />
                {/*<button type="button" className={styles['btn-delete']}></button>*/}
            </div>
            <div className={styles['form-row']}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src="/calendary.svg" alt="Иконка календаря" />
                    <span>Дата</span>
                </label>
                <input type="date" name='date'
                    className={cn(styles['input'], {
                        [styles['invalid']]: !formValideState.date
                    })}
                    id='date' />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor='tag' className={styles['form-label']}>
                    <img src="/folder.svg" alt="Иконка папки" />
                    <span>Метка</span>
                </label>
                <input type="text" name='tag'
                    className={`${styles['input']}`}
                    id='tag' />
            </div>
            <textarea name="text" id="" cols={32} rows={18}
                className={cn(styles['input'], {
                    [styles['invalid']]: !formValideState.text
                })}>
            </textarea>
            <Button text="Сохранить" type="submit" />
        </form>
    );
}

export default JournalForm;