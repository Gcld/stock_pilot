import { useState, useEffect } from "react";
import { Container, PriceInput } from "./styled";
import { useMain } from "@/context/main";

export default function Price() {
    const { priceRange, setPriceRange } = useMain();
    const [minPrice, setMinPrice] = useState<string>(priceRange.min ? priceRange.min.toString() : "");
    const [maxPrice, setMaxPrice] = useState<string>(priceRange.max ? priceRange.max.toString() : "");

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
        const formattedPrice = formatPrice(value);
        setPrice(formattedPrice);
    };
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[\d\b]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
            e.preventDefault();
        }
    };

    useEffect(() => {
        const min = minPrice ? parseFloat(minPrice) : null;
        const max = maxPrice ? parseFloat(maxPrice) : null;
        setPriceRange({ min, max });
    }, [minPrice, maxPrice, setPriceRange]);

    return (
        <Container>
            <h3>PRICE</h3>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <PriceInput
                    type="text"
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={(e) => handlePriceChange(e.target.value, setMinPrice)}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <PriceInput
                    type="text"
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={(e) => handlePriceChange(e.target.value, setMaxPrice)}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </Container>
    );
}