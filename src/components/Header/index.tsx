'use client'

import ButtonsMiddle from "../ButtonsMiddle";
import Logo from "../Logo";
import { Container } from "./styled";

export default function Header() {
    return (
        <Container>
            <Logo/>
            <ButtonsMiddle/>
        </Container>
    );
}