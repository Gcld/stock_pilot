import ItemCard from "../ItemCard";
import { Container } from "./styled";

export default function ItemsContainer() {
    return (
        <Container>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </Container>
    );
}