import { useContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { UserProfile } from '../context/userprofil.context';
import { UserProfiles } from '../context/userprofiles.context';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import HeaderNavPanel from '../components/HeaderNavPanel/HeaderNavPanel';
import ItemBar from '../components/ItemBar/ItemBar';
import MainView from '../view/MainView/MainView';
import styles from './Layout.module.css';

const Layout = () => {
	const userProfile = useContext(UserProfile);
	const userProfiles = useContext(UserProfiles);
	const location = useLocation();
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
		<>
			<HeaderNavPanel>
				<HeaderBar>
					<NavLink to="/">{({ isActive }) => <ItemBar text={'Поиск фильмов'} isActive={isActive} />}</NavLink>
					<NavLink to="/favorites">{({ isActive }) => <ItemBar text={'Мои фильмы'} icon='count' isActive={isActive} />}</NavLink>
					{userProfile?.profile.isLogined ?
						<ItemBar text={userProfile?.profile.name && userProfile.profile.isLogined ? userProfile.profile.name : ''} icon='profile' /> :
						''
					}
					{userProfile?.profile.isLogined ?
						<ItemBar onClick={btnExit} text={'Выйти'} icon='exit' /> :
						<NavLink to="/login">{({ isActive }) => <ItemBar text={'Войти'} icon='exit' isActive={isActive} />}</NavLink>
					}
				</HeaderBar>
			</HeaderNavPanel>
			<div className={styles.main}>
			    {location.pathname ==='/' ? <MainView /> : <Outlet />};
			</div>
		</>

	);
};

export default Layout;