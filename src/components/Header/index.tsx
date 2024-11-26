'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ButtonsEnd from "../ButtonsEnd";
import ButtonsMiddle from "../ButtonsMiddle";
import Logo from "../Logo";
import { Container } from "./styled";
import { useMain } from "@/context/main";
import { LuMenu } from 'react-icons/lu';

export default function Header() {
    const { showMenu, setShowMenu } = useMain();
    const pathname = usePathname();

    useEffect(() => {
        setShowMenu(pathname === '/');
    }, [pathname, setShowMenu]);

    return (
        <Container>
            <Logo />
            {showMenu && <ButtonsMiddle />}
            <ButtonsEnd />
            <div className='mobileMenu'>
                <LuMenu size={30} onClick={() => setShowMenu(!showMenu)}/>
            </div>
        </Container>
    );
}