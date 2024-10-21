import { Container } from "./styled";


export default function Price() {
    return (
        <Container>
            <h3>PRICE</h3>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <h2>Minimum price</h2>
            </div>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <h2>Maximum price</h2>
            </div>
        </Container>
    );
}