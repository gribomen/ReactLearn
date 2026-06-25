import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
    const [logoIndex, setLogoIndex] = useState(0);

    const toggleLog = () => {
        setLogoIndex(state => Number(!state));
    };
    console.log('Header');
    return (
        <>
            <Logo image={logos[logoIndex]} />
            <SelectUser />
            <Button onClick={toggleLog} > Сменить лого </Button>
        </>
    );
}

export default Header;