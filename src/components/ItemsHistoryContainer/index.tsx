import { Product } from "@/Interfaces/interface";
import ItemHistoryCard from "../ItemHistoryCard";
import { Container, NoProductsMessage } from "./styled";

interface ItemsHistoryContainerProps {
    data: Product[]
}

export default function ItemsHistoryContainer({data}: ItemsHistoryContainerProps) {
    return (
        <Container>
            {data.length === 0 
                ? <NoProductsMessage>No products found.</NoProductsMessage>
                : data.map((item) => (
                    <ItemHistoryCard key={item.id} data={item} />
                ))
            }
        </Container>
    );
}