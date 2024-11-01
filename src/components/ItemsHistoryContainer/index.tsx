import { Product } from "@/Interfaces/interface";
import ItemHistoryCard from "../ItemHistoryCard";
import { Container } from "./styled";

interface ItemsHistoryContainerProps {
    data: Product[]
}

export default function ItemsHistoryContainer({data}: ItemsHistoryContainerProps) {
    return (
        <Container>
            {data.length === 0 && <h1>No products found</h1>}
            {data?.map((item) => (
                <ItemHistoryCard key={item.id} data={item} />
            ))}
        </Container>
    );
}