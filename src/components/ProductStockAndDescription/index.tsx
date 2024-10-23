import { Container, Description, Separator } from "./styled";

export default function ProductStockAndDescription() {
    return (
        <Container>
            <h1>Stock</h1>
            <div className="quantityAndDescription">
                <h3>QUANTITY AT HAND</h3>
                <h2>980</h2>
                <div className="AdjustStockButton">
                    <h2>Adjust Stock</h2> 
                </div>
                <Separator />
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</Description>
            </div>
        </Container>
    );
}