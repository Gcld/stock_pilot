import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";
import Link from "next/link";
import { useState } from "react";
import ActionDropdown from "../ActionDropdown";
import { Product } from "@/Interfaces/interface";

interface Props {
    data: Product
}

export default function ItemCardGrid({data}: Props) {
    console.log("GRID", data)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleActionClick = (action: string) => {
        console.log(`Action clicked: ${action}`);
    };

    return (
        <Link href={`/product/${data.id}`} passHref>
            <Container>
                <ItemPicture/>
                <ItemInfo>
                    <h1>{data.name}</h1>
                    <ItemDescription>
                        <h2>{data.category.name} • {data.stock_quantity > 0 ? 'Stocked Product' : 'Out of Stock'}:</h2>
                        <h2 className="inStock">{data.stock_quantity} in stock</h2>
                    </ItemDescription>
                </ItemInfo>
                <ItemPriceAndButton>
                    <h1>${data.price}</h1>
                    <ActionDropdown 
                        isOpen={isDropdownOpen}
                        setIsOpen={setIsDropdownOpen}
                        onActionClick={handleActionClick}
                    />
                </ItemPriceAndButton>
            </Container>
        </Link>
    );
}