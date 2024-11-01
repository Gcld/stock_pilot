import { Product } from "@/Interfaces/interface";
import ItemCardGrid from "../ItemCardGrid";
import { Container, NoProductsMessage } from "./styled";

interface ItemsContainerProps {
    data: Product[];
}

export default function ItemsContainerGrid({ data }: ItemsContainerProps) {
    return (
        <Container>
            {data.length === 0
                ? <NoProductsMessage>No products found.</NoProductsMessage>
                : data.map((item) => (
                    <ItemCardGrid key={item.id} data={item} />
                ))
            }
        </Container>
    );
}