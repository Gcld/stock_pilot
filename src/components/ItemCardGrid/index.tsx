import { Container, ItemDescription, ItemDiv, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";
import Link from "next/link";
import { useState } from "react";
import ActionDropdown from "../ActionDropdown";
import { Product } from "@/Interfaces/interface";
import ProductImage from "../ProuctImage";

interface Props {
    data: Product;
    getProducts: () => Promise<void>;
}

export default function ItemCardGrid({data, getProducts}: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                        id={data.id}
                        getProducts={getProducts}
                    />
                </ItemPriceAndButton>
            </Container>
    );
}