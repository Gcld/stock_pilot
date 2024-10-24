import { BsThreeDots } from "react-icons/bs";
import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";
import Link from "next/link";

export default function ItemCard() {
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
                    <BsThreeDots size={48}/>
                </ItemPriceAndButton>
            </Container>
        </Link>
        
    )
}