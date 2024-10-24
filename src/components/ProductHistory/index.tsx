import ProductHistoryCard from "../ProductHistoryCard";
import ProductStockAndDescription from "../ProductStockAndDescription";
import { Container, HistoryCardDiv } from "./styled";

export default function ProductHistory() {
    return (
        <Container>
            <HistoryCardDiv>
                <ProductHistoryCard/>
                <ProductHistoryCard/>
                <ProductHistoryCard/>
                <ProductHistoryCard/>
                <ProductHistoryCard/>
                <ProductHistoryCard/>
            </HistoryCardDiv>
            <ProductStockAndDescription/>
        </Container>
    );
}