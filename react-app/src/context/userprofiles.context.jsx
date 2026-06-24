import { createContext, useState, useEffect } from 'react';

export const UserProfiles = createContext([]);

export function UserProfilesProvider({ children }) {
    const [profiles, setProfiles] = useState(() => {
        try {
            const item = localStorage.getItem('profiles');
            return item ? JSON.parse(item) : [];
        } catch (error) {
            console.error('Ошибка чтения localStorage ключа "profils": ', error);
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

}

export default UserProfilesProvider;