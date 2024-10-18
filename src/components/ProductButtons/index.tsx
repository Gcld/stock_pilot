import { MdFormatListBulleted } from "react-icons/md";
import { Container } from "./styled";
import { IoGrid } from "react-icons/io5";

export default function ProductButtons() {
    return (
        <Container>
            <div className="buttonsClicked">
                <MdFormatListBulleted size={33} color="var(--primaryDarkZaori)"/>
            </div>
            <div className="buttons">
                <IoGrid size={33} color="var(--primaryLightZaori)"/>
            </div>
        </Container>
    );
}