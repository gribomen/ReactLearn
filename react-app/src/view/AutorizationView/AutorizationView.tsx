//import React from 'react';
import styles from './AutorizationView.module.css';
import Button from '../../components/Button/Button';
import HeaderText from '../../components/HeaderText/HeaderText';
import HeaderNavPanel from '../../components/HeaderNavPanel/HeaderNavPanel';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import ItemBar from '../../components/ItemBar/ItemBar';
import Search from '../../components/Search/Search';
import MainContent from '../../components/MainContent/MainContent';
import { useRef, useContext } from 'react';
import { UserProfile } from '../../context/userprofil.context';
import { UserProfiles } from '../../context/userprofiles.context';

function AutorizationView() {
	const inputRef = useRef<HTMLInputElement>(null);
	const userProfiles = useContext(UserProfiles);
	const userProfile = useContext(UserProfile);

	const onClick = () => {
		if (!inputRef.current?.value || !userProfiles || !userProfile) {
			return;
		};

		userProfiles.setProfiles([...userProfiles.profiles.map(item => {
			console.log(item);
			console.log(userProfile.profile);
			if (item.name === userProfile.profile.name && item.isLogined === userProfile.profile.isLogined) {
				item.isLogined = false;
				return item;
			}
			return item;
		})]);
		const currenProfil = userProfiles.profiles.find(item => item.name === inputRef.current!.value);
		if (currenProfil) {
			currenProfil.isLogined = true;
			userProfile.setProfile(currenProfil);
			userProfiles.setProfiles([...userProfiles.profiles]);
		} else {
			const el = { name: inputRef.current?.value, isLogined: true };
			userProfile.setProfile(el);
			userProfiles.setProfiles([...userProfiles.profiles, el]);
		}
	};

	const btnExit = () => {
		if (!userProfiles || !userProfile) {
			return;
		}
		userProfiles.setProfiles(userProfiles.profiles.map(item => {
			if (item === userProfile.profile) {
				return { ...item, isLogined: false };
			}
			return item;
		}));
		userProfile.setProfile({ name: '', isLogined: false });
	};
	return (
		<div className={styles.main}>
			<HeaderNavPanel>
				<HeaderBar>
					<ItemBar text={'Поиск фильмов'} active={'active'} />
					<ItemBar text={'Мои фильмы'} icon='count' />
					<ItemBar text={userProfile?.profile.name && userProfile.profile.isLogined ? userProfile.profile.name : ''} icon='profile' />
					<ItemBar text={'Выйти'} onClick={btnExit} />
				</HeaderBar>
			</HeaderNavPanel>
			<MainContent>
				<div className={styles['wrapper-autorization']}>
					<HeaderText
						fontSize='64'
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
