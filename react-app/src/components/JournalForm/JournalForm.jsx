import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const textRef = useRef();

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title: {
                titleRef.current.focus();
                break;
            }

            case !isValid.date: {
                dateRef.current.focus();
                break;
            }

            case !isValid.text: {
                textRef.current.focus();
                break;
            }
        }
    };

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.text || !isValid.title) {
            timerId = setTimeout(() => {
                focusError(isValid);
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 1000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispatchForm({ type: 'CLEAR' });
        }
    }, [isFormReadyToSubmit, values, onSubmit]);


    const onChange = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
    };
    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    };

    return (
        <form className={`${styles['journal-form']}`} onSubmit={addJournalItem}>
            <div>
                <input type="text" name='title' ref={titleRef} value={values.title} onChange={onChange}
                    className={cn(styles['input'], styles['input-title'], {
                        [styles['invalid']]: !isValid.title
                    })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor='date' className={styles['form-label']}>
                    <img src="/calendary.svg" alt="Иконка календаря" />
                    <span>Дата</span>
                </label>
                <input type="date" name='date' value={values.date} onChange={onChange} ref={dateRef}
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
                <input type="text" name='tag' value={values.tag} onChange={onChange}
                    className={`${styles['input']}`}
                    id='tag' />
            </div>
            <textarea name="text" id="" cols={32} rows={18} value={values.text} onChange={onChange} ref={textRef}
                className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.text
                })}>
            </textarea>
            <Button text="Сохранить" type="submit" />
        </form>
    );
}

export default JournalForm;