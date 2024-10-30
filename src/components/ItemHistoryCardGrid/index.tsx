import { Product } from "@/Interfaces/interface";
import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";

interface Props {
    data: Product
}

export default function ItemHistoryCardGrid({data}: Props) {
    return (
        <Container>
            <ItemPicture/>
            <ItemInfo>
                <h1>{data.name}</h1>
                <ItemDescription>
                    <h2>{data.category.name} • Stocked Product: </h2>
                    <h2 className="inStock">{data.stock_quantity} in stock</h2>
                </ItemDescription>
            </ItemInfo>
            <ItemPriceAndButton>
                <h1>${data.price}</h1>
            </ItemPriceAndButton>
        </Container>
    )
}