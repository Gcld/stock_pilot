import { Product } from "@/Interfaces/interface";
import ItemHistoryCardGrid from "../ItemHistoryCardGrid";
import { Container, NoProductsMessage } from "./styled";

interface ItemsContainerProps {
    data: Product[];
}

export default function ItemsHistoryContainerGrid({data}: ItemsContainerProps) {
    return (
        <Container>
            {data.length === 0 
                ? <NoProductsMessage>No products found</NoProductsMessage>
                : data.map((item) => (
                    <ItemHistoryCardGrid key={item.id} data={item} />
                ))
            }
        </Container>
    );
}