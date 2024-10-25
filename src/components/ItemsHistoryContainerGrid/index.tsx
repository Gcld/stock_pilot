import ItemHistoryCardGrid from "../ItemHistoryCardGrid";
import { Container } from "./styled";

export default function ItemsHistoryContainerGrid() {
    return (
        <Container>
            <ItemHistoryCardGrid/>
            <ItemHistoryCardGrid/>
            <ItemHistoryCardGrid/>
            <ItemHistoryCardGrid/>
            <ItemHistoryCardGrid/>
            <ItemHistoryCardGrid/>
        </Container>
    );
}