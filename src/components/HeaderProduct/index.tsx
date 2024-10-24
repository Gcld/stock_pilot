'use client'

import ButtonsEnd from "../ButtonsEnd";
import Logo from "../Logo";
import { Container } from "./styled";


export default function Header() {
    return (
        <Container>
            <Logo/>
            <ButtonsEnd/>
        </Container>
    );
}