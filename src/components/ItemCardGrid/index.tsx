import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";
import Link from "next/link";
import { useState } from "react";
import ActionDropdown from "../ActionDropdown";

export default function ItemCardGrid() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleActionClick = (action: string) => {
        console.log(`Action clicked: ${action}`);
    };

    return (
        <Link href={`/product/1`} passHref>
            <Container>
                <ItemPicture/>
                <ItemInfo>
                    <h1>Product Name</h1>
                    <ItemDescription>
                        <h2>Category • Stocked Product: </h2>
                        <h2 className="inStock">x in stock</h2>
                    </ItemDescription>
                </ItemInfo>
                <ItemPriceAndButton>
                    <h1>$100.00</h1>
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