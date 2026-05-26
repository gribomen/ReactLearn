import './UserCard.css';

function UserCard({ name, age, email }) {

    return (
        <div className="card">
            <h2>Пользовательская карточка</h2>
            <div className='field'>
                <div className='field__label'>Имя:</div>
                <div className='field__value'>{name}</div>
            </div>
            <div className='field'>
                <div className='field__label'>Возраст:</div>
                <div className='field__value'>{age}</div>
            </div>
            <div className='field'>
                <div className='field__label'>Email:</div>
                <div className='field__value'>{email}</div>
            </div>
        </div>
    );
}

export default UserCard;
