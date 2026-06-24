import { createContext, useState } from 'react';

export const UserProfile = createContext({ name: '', isLogined: false });

export function UserProfileProvider({ children }) {
    const [profile, setProfile] = useState({ name: '', isLogined: false });
    return (
        <UserProfile.Provider value={{ profile, setProfile }}>
            {children}
        </UserProfile.Provider>
    );

}

export default UserProfileProvider;