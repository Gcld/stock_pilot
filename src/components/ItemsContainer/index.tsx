import { Product } from "@/Interfaces/interface";
import ItemCard from "../ItemCard";
import { Container } from "./styled";

interface ItemsContainerProps {
    data: Product[];
}


export default function ItemsContainer({data}: ItemsContainerProps) {
    return (
        <Container>
            {data.length === 0 && <h1>No products found</h1>}
            {data?.map((item) => (
                <ItemCard key={item.id} data={item} />
            ))}
        </Container>
    );
}