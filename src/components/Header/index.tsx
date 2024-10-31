'use client'

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ButtonsEnd from "../ButtonsEnd";
import ButtonsMiddle from "../ButtonsMiddle";
import Logo from "../Logo";
import { Container } from "./styled";
import { useMain } from "@/context/main";

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
        </Container>
    );
}