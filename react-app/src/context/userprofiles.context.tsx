import { createContext, useState, useEffect, type ReactNode, type FC } from 'react';
import type { IUserProfile } from './userprofil.context';


interface UserProfilesContextType {
	profiles: IUserProfile[];
	setProfiles: React.Dispatch<React.SetStateAction<IUserProfile[]>>;
}

export const UserProfiles = createContext<UserProfilesContextType | null>(null);

interface UserProfilesProviderProps {
	children: ReactNode;
}
const UserProfilesProvider: FC<UserProfilesProviderProps> = ({ children }) => {
	const [profiles, setProfiles] = useState<IUserProfile[]>(() => {
		try {
			const item = localStorage.getItem('profiles');
			return item ? JSON.parse(item) : [];
		} catch (error) {
			console.error('Ошибка чтения localStorage ключа "profils": ', error);
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem('profiles', JSON.stringify(profiles));
	}, [profiles]);

	return (
		<UserProfiles.Provider value={{ profiles, setProfiles }}>
			{children}
		</UserProfiles.Provider>
	);

};

export default UserProfilesProvider;