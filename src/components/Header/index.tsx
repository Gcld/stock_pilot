'use client'

import ButtonsEnd from "../ButtonsEnd";
import ButtonsMiddle from "../ButtonsMiddle";
import Logo from "../Logo";
import { Container } from "./styled";
import { useMain } from "@/context/main";


export default function Header() {

    const{showMenu} = useMain();

    return (
        <Container>
            <Logo/>
            {showMenu && <ButtonsMiddle/>}
            <ButtonsEnd/>
        </Container>
    );
}