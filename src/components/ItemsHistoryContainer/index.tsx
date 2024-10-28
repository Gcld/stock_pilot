import ItemHistoryCard from "../ItemHistoryCard";
import { Container } from "./styled";

export default function ItemsHistoryContainer() {
    return (
        <Container>
            <ItemHistoryCard/>
            <ItemHistoryCard/>
            <ItemHistoryCard/>
            <ItemHistoryCard/>
            <ItemHistoryCard/>
            <ItemHistoryCard/>
        </Container>
    );
}