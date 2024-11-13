import { Product } from "@/Interfaces/interface";
import ItemCardGrid from "../ItemCardGrid";
import { Container, NoProductsMessage } from "./styled";

interface ItemsContainerProps {
    data: Product[];
    getProducts: () => Promise<void>;
}

export default function ItemsContainerGrid({ data, getProducts}: ItemsContainerProps) {
    return (
        <Container>
            {data.length === 0
                ? <NoProductsMessage>No products found.</NoProductsMessage>
                : data.map((item) => (
                    <ItemCardGrid key={item.id} data={item} getProducts={getProducts}/>
                ))
            }
        </Container>
    );
}