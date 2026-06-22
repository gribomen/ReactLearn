import { useReducer } from 'react';

const initialState = { text: '', isValid: true };
const formReducer = function (state, action) {
    switch (action.type) {
        case 'SET_TEXT': {
            return {
                ...state,
                text: action.payload,
                isValid: true
            };
        }

        case 'INVALIDATE': {
            return {
                ...state,
                isValid: false
            };
        }
    }
};

function NoteEditor() {
    const [state, dispatchState] = useReducer(formReducer, initialState);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        console.log(formData.get('text').trim() === '');
        if (formData.get('text').trim() === '') {
            dispatchState({ type: 'INVALIDATE' });
            return;
        }

        dispatchState({ type: 'SET_TEXT', payload: formData.get('text') });
    };

    return (
        <form onSubmit={onSubmit}>
            <p style={{ display: state.isValid ? 'none' : 'block' }}>Ошибка: поле не может быть пустым</p>
            <textarea name="text" id="text"></textarea>
            <button type='submit '>Сохранить</button>
        </form>
    );
}

export default NoteEditor;
