import React, { useState, useEffect } from "react";
import { Container, ItemDescription, ItemDiv, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";
import Link from "next/link";
import ActionDropdown from "../ActionDropdown";
import { Product } from "@/Interfaces/interface";
import axios from "axios";
import ProductImage from "../ProuctImage";

interface Props {
    data: Product;
    getProducts: () => Promise<void>;
}

export default function ItemCard({ data, getProducts }: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [, setImageUrl] = useState("");

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=product&orientation=squarish`
                );
                setImageUrl(response.data.urls.small);
            } catch (error) {
                console.error("Error fetching random image:", error);
                // Definir uma imagem padrão aqui em caso de erro
                setImageUrl("/path/to/default/image.jpg");
            }
        };

        fetchRandomImage();
    }, []);

    return (
        <Container>
            <Link href={`/product/${data.id}`} passHref>
                <ItemDiv>
                    <ItemPicture>
                        <ProductImage productId={data.id} alt={data.name} />
                    </ItemPicture>
                    <ItemInfo>
                        <h1>{data.name}</h1>
                        <ItemDescription>
                            <h2>{data.category.name} • {data.stock_quantity > 0 ? 'Stocked Product' : 'Out of Stock'}:</h2>
                            <h2 className="inStock">{data.stock_quantity} in stock</h2>
                        </ItemDescription>
                    </ItemInfo>
                </ItemDiv>
            </Link>
            <ItemPriceAndButton>
                <h1>${data.price}</h1>
                <ActionDropdown
                    isOpen={isDropdownOpen}
                    setIsOpen={setIsDropdownOpen}
                    id = {data.id}
                    getProducts={getProducts}
                />
            </ItemPriceAndButton>
        </Container>
    );
}