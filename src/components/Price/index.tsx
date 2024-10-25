// src/components/Price/index.tsx

import { useState } from "react";
import { Container, PriceInput } from "./styled";

export default function Price() {
    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    const formatPrice = (value: string): string => {

        const numbers = value.replace(/[^\d]/g, "");
        
        const price = parseFloat(numbers) / 100;
        
        return price.toFixed(2);
    };

    const handlePriceChange = (value: string, setPrice: (price: string) => void) => {
        if (!value) {
            setPrice("");
            return;
        }

        // Formata o preço
        const formattedPrice = formatPrice(value);
        setPrice(formattedPrice);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[\d\b]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
            e.preventDefault();
        }
    };

    return (
        <Container>
            <h3>PRICE</h3>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <PriceInput
                    type="text"
                    placeholder="Minimum price"
                    value={minPrice ? `${minPrice}` : ""}
                    onChange={(e) => handlePriceChange(e.target.value, setMinPrice)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <PriceInput
                    type="text"
                    placeholder="Maximum price"
                    value={maxPrice ? `${maxPrice}` : ""}
                    onChange={(e) => handlePriceChange(e.target.value, setMaxPrice)}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </Container>
    );
}