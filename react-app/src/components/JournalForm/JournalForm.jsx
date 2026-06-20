import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    useEffect(() => {
        let timerId;
        console.log('Очистка состояния');
        if (!isValid.date || !isValid.text || !isValid.title) {
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
        }
    }, [isFormReadyToSubmit]);

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        dispatchForm({ type: 'SUBMIT', payload: formProps });
    };

    return (
        <form className={`${styles['journal-form']}`} onSubmit={addJournalItem}>
            <div>
                <input type="text" name='title' className={cn(styles['input'], styles['input-title'], {
                    [styles['invalid']]: !isValid.title
                })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src="/calendary.svg" alt="Иконка календаря" />
                    <span>Дата</span>
                </label>
                <input type="date" name='date'
                    className={cn(styles['input'], {
                        [styles['invalid']]: !isValid.date
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
                    [styles['invalid']]: !isValid.text
                })}>
            </textarea>
            <Button text="Сохранить" type="submit" />
        </form>
    );
}

export default JournalForm;