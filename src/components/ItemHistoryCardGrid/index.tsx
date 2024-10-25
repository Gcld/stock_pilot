import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";

export default function ItemHistoryCardGrid() {
    return (
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
            </ItemPriceAndButton>
        </Container>
    )
}