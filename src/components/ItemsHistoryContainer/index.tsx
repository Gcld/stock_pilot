import { Product } from "@/Interfaces/interface";
import ItemHistoryCard from "../ItemHistoryCard";
import { Container } from "./styled";

interface ItemsHistoryContainerProps {
    data: Product[]
}

export default function ItemsHistoryContainer({data}: ItemsHistoryContainerProps) {
    return (
        <Container>
            {data?.map((item) => (
                <ItemHistoryCard key={item.id} data={item} />
            ))}
        </Container>
    );
}