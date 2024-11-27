'use client'

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ButtonsEnd from "../ButtonsEnd";
import ButtonsMiddle from "../ButtonsMiddle";
import Logo from "../Logo";
import { Container, MobileMenuOverlay } from "./styled";
import { useMain } from "@/context/main";
import { LuMenu, LuX } from 'react-icons/lu';

export default function Header() {
    const { showMenu, setShowMenu } = useMain();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setShowMenu(pathname === '/');
        setMobileMenuOpen(false);
    }, [pathname, setShowMenu]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <Container>
                <Logo />
                {showMenu && <ButtonsMiddle />}
                <ButtonsEnd />
                <div className='mobileMenu' onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <LuX size={30}/> : <LuMenu size={30}/>}
                </div>
            </Container>
            {mobileMenuOpen && (
                <MobileMenuOverlay>
                    <ButtonsEnd />
                </MobileMenuOverlay>
            )}
        </>
    );
}