import { Product } from "@/Interfaces/interface";
import ItemCard from "../ItemCard";
import { Container } from "./styled";

interface ItemsContainerProps {
    data: Product[];
}


export default function ItemsContainer({data}: ItemsContainerProps) {
    return (
        <Container>
            {data.map((item) => (
                <ItemCard key={item.id} data={item} />
            ))}
        </Container>
    );
}