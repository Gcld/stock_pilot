import { Container, TotalProducts } from "./styled";

export default function ProductTitle() {
    return (
        <Container>
            <h1>Product</h1>
            <TotalProducts>
                <h2>945</h2>
                <h3>total products</h3>
            </TotalProducts>
        </Container>
    );
}