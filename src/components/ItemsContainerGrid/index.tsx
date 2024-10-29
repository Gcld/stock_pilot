import { Product } from "@/Interfaces/interface";
import ItemCardGrid from "../ItemCardGrid";
import { Container } from "./styled";

interface ItemsContainerProps{
    data: Product[];
}

export default function ItemsContainerGrid({data}: ItemsContainerProps) {
    console.log("GRID CONTAINER", data)
    return (
        <Container>
            {data.length === 0 && <h1>No products found</h1>}
            {data?.map((item) => (
                <ItemCardGrid key={item.id} data={item} />
            ))}
        </Container>
    );
}