import ItemCardGrid from "../ItemCardGrid";
import { Container } from "./styled";

export default function ItemsContainerGrid() {
    return (
        <Container>
            <ItemCardGrid/>
            <ItemCardGrid/>
            <ItemCardGrid/>
            <ItemCardGrid/>
        </Container>
    );
}