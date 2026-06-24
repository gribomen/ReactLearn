import { createContext, useState } from 'react';

export const UserProfile = createContext({ name: '', isLogined: false });

export function UserProfileProvider({ children }) {
    const [profile, setProfile] = useState(() => {
        try {
            const storage = JSON.parse(localStorage.getItem('profiles'));
            for (let item of storage) {
                if (item.isLogined) {
                    return item;
                }
            }
            return { name: '', isLogined: false };
        } catch (error) {
            console.error('Ошибка чтения localStorage ключа "profils": ', error);
        }
    });
    return (
        <UserProfile.Provider value={{ profile, setProfile }}>
            {children}
        </UserProfile.Provider>
    );

}

export default UserProfileProvider;