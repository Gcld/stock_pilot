import { LuArchive } from "react-icons/lu";
import { Container, LogoDiv } from "./styled";
import Link from "next/link";

export default function Logo() {
    return (
        
        <Container>
            <Link href="/">
                <LogoDiv>
                    <LuArchive size={58} color="var(--primaryDarkZaori)"/>
                    <h2>StockPilot</h2>
                </LogoDiv>
            </Link>
        </Container>
    );
}