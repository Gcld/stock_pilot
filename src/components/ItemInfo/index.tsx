import { Product } from "@/Interfaces/interface";
import { Container } from "./styled";

interface Props {
    data: Product
}

export const ItemInfo = ({data}: Props) => {
    return (
        <Container>
            <h3>ID: PRD_{data.id} • {data.category?.name} • {data.stock_quantity === 0 ? 'Out of Stock' : 'Stocked Product'} </h3>
        </Container>
    );
}