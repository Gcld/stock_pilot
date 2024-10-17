'use client'

import { ButtonHeader, ButtonHeaderClicked, ButtonsMiddle, Container, Logo } from "./styled";
import { LuArchive, LuBox, LuHistory } from "react-icons/lu";

export default function Header() {
    return (
        <Container>
            <Logo>
                <LuArchive size={58} color="var(--primaryDarkZaori)"/>
                <h2>StockPilot</h2>
            </Logo>
            <ButtonsMiddle>
                <ButtonHeaderClicked>
                    <LuBox size={20} color="var(--primaryDarkZaori)"/>
                    <h3>Inventory</h3>
                </ButtonHeaderClicked>
                <ButtonHeader>
                    <LuHistory size={20} color="var(--primaryDarkZaori)"/>
                    <h3>History</h3>
                </ButtonHeader>
            </ButtonsMiddle>
            
        </Container>
    );
}