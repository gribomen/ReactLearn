//import React from 'react';
import styles from './AutorizationView.module.css';
import Button from '../../components/Button/Button';
import HeaderText from '../../components/HeaderText/HeaderText';
import HeaderNavPanel from '../../components/HeaderNavPanel/HeaderNavPanel';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import ItemBar from '../../components/ItemBar/ItemBar';
import Search from '../../components/Search/Search';
import MainContent from '../../components/MainContent/MainContent';
import { useRef, useState, useEffect } from 'react';

function AutorizationView() {
    const inputRef = useRef();
    const [profil, setProfil] = useState({ name: '', isLogined: false });
    const [profils, setProfils] = useState(() => {
        try {
            const item = localStorage.getItem('profils');
            return item ? JSON.parse(item) : [];
        } catch (error) {
            console.error(`Ошибка чтения localStorage ключа "profils": `, error);
        }
    });

    useEffect(() => {
        localStorage.setItem('profils', JSON.stringify(profils));
    }, [profils]);

    const onClick = () => {
        if (!inputRef.current.value) {
            return;
        }
        const currenProfil = profils.find(item => item.name === inputRef.current.value);
        if (currenProfil) {
            currenProfil.isLogined = true;
            setProfil(currenProfil);
        } else {
            console.log(profil, profils);
            const el = { name: inputRef.current.value, isLogined: true };
            setProfil(el);
            setProfils([...profils, el]);
        }
    };

    const btnExit = () => {
        setProfils(profils.map(item => {
            if (item === profil) {
                item.isLogined = false;
            }
            return item;
        }));
        setProfil({ name: '', isLogined: false });
    };
    return (
        <div className={styles.main}>
            <HeaderNavPanel>
                <HeaderBar>
                    <ItemBar text={'Поиск фильмов'} active={'active'} />
                    <ItemBar text={'Мои фильмы'} icon='count' />
                    <ItemBar text={profil.name && profil.isLogined ? profil.name : ''} icon='profile' />
                    <ItemBar text={'Выйти'} onClick={btnExit} />
                </HeaderBar>
            </HeaderNavPanel>
            <MainContent>
                <div className={styles['wrapper-autorization']}>
                    <HeaderText
                        fontSize={64}
                        text='Вход'
                    />
                    <Search placeholder={'Ваше имя'} isIcon={false} size={37} ref={inputRef} />
                    <Button
                        text="Войти в профиль"
                        onClick={onClick}
                    />
                </div>
            </MainContent>
        </div>
    );
}

export default AutorizationView;
