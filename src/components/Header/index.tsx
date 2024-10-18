'use client'

import ButtonsEnd from "../ButtonsEnd";
import ButtonsMiddle from "../ButtonsMiddle";
import Logo from "../Logo";
import { Container } from "./styled";

export default function Header() {
    return (
        <Container>
            <Logo/>
            <ButtonsMiddle/>
            <ButtonsEnd/>
        </Container>
    );
}