import { LuBox, LuHistory } from "react-icons/lu";
import { ButtonHeader, ButtonHeaderClicked, Container } from "./styled";

export default function ButtonsMiddle() {
    return (
        <Container>
            <ButtonHeaderClicked>
                    <LuBox size={20} color="var(--primaryDarkZaori)"/>
                    <h3>Inventory</h3>
                </ButtonHeaderClicked>
                <ButtonHeader>
                    <LuHistory size={20} color="var(--primaryDarkZaori)"/>
                    <h3>History</h3>
                </ButtonHeader>
        </Container>
    );
}