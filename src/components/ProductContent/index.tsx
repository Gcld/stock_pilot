import ProductInfo from "../Product Info";
import ProductStockAndDescription from "../ProductStockAndDescription";
import { Container } from "./styled";

export default function ProductContent() {
    return (
        <Container>
            <ProductInfo/>
            <ProductStockAndDescription/>
        </Container>
    );
}