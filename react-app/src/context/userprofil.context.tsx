import { createContext, useState, type FC, type ReactNode } from 'react';

export interface IUserProfile {
	name: string,
	isLogined: boolean,
}

interface UserProfileContextType {
	profile: IUserProfile;
	setProfile: React.Dispatch<React.SetStateAction<IUserProfile>>;
}

export const UserProfile = createContext<UserProfileContextType | null>(null);

interface UserProfileProviderProps {
	children: ReactNode;
}

const UserProfileProvider: FC<UserProfileProviderProps> = ({ children }) => {
	const [profile, setProfile] = useState<IUserProfile>(() => {
		try {
			const storage = JSON.parse(localStorage.getItem('profiles')!);
			for (const item of storage) {
				if (item.isLogined) {
					return item;
				}
			}
			return { name: '', isLogined: false };
		} catch (error) {
			console.error('Ошибка чтения localStorage ключа "profiles": ', error);
			return { name: '', isLogined: false };
		}
	});

	return (
		<UserProfile.Provider value={{ profile, setProfile }}>
			{children}
		</UserProfile.Provider>
	);
};

export default UserProfileProvider;