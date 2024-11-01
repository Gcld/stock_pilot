import { Product } from "@/Interfaces/interface";
import ItemCard from "../ItemCard";
import { Container, NoProductsMessage } from "./styled";

interface ItemsContainerProps {
    data: Product[];
}

export default function ItemsContainer({ data }: ItemsContainerProps) {
    return (
        <Container>
            {data.length === 0
                ? <NoProductsMessage>No products found.</NoProductsMessage>
                : data.map((item) => (
                    <ItemCard key={item.id} data={item} />
                ))
            }
        </Container>
    );
}