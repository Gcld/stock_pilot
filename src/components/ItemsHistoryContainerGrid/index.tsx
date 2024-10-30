import { Product } from "@/Interfaces/interface";
import ItemHistoryCardGrid from "../ItemHistoryCardGrid";
import { Container } from "./styled";

interface ItemsContainerProps {
    data: Product[];
}

export default function ItemsHistoryContainerGrid({data}: ItemsContainerProps) {
    return (
        <Container>
            {data.length === 0 && <h1>No products found</h1>}
            {data?.map((item) => (
                <ItemHistoryCardGrid key={item.id} data={item} />
            ))}
        </Container>
    );
}