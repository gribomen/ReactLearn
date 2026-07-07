//import React from 'react';
import styles from './AutorizationView.module.css';
import Button from '../../components/Button/Button';
import HeaderText from '../../components/HeaderText/HeaderText';
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

	return (
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
	);
}

export default AutorizationView;
