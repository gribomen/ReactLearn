import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';
function JournalForm({ onSubmit }) {
    const [formValideState, setValidState] = useState({
        title: true,
        text: true,
        date: true
    });

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
            <input type="text" name='title' className={`${styles['input']} ${formValideState.title ? '' : styles['invalid']}`} />
            <input type="date" name='date' className={`${styles['input']} ${formValideState.date ? '' : styles['invalid']}`} />
            <input type="text" name='tag' />
            <textarea name="text" id="" cols={30} rows={10} className={`${styles['input']} ${formValideState.text ? '' : styles['invalid']}`}></textarea>
            <Button text="Сохранить" type="submit" />
        </form>
    );
}

export default JournalForm;