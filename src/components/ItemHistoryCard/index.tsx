import { Product } from "@/Interfaces/interface";
import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton } from "./styled";
import ProductImage from "../ProuctImage";

interface Props {
    data: Product;
}

export default function ItemHistoryCard({ data }: Props) {
    return (
        <Container>
            <ItemPicture>
                <ProductImage productId={data.id} alt={data.name} />
            </ItemPicture>
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