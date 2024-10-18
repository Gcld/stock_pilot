import { LuArchive } from "react-icons/lu";
import { Container } from "./styled";

export default function Logo() {
    return (
        <Container>
            <LuArchive size={58} color="var(--primaryDarkZaori)"/>
            <h2>StockPilot</h2>
        </Container>
    );
}