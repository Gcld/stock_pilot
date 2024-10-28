import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import ItemsContainerGrid from "../ItemsContainerGrid";
import { Container } from "./styled";
import { useMain } from "@/context/main";

export default function Content() {
    const { isGridView } = useMain();

    return (
        <Container>
            <Filters/>
            {isGridView ? <ItemsContainerGrid/> : <ItemsContainer/>}
            <AddProduct/>
        </Container>
    );
}