import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import ItemsContainerGrid from "../ItemsContainerGrid";
import { Container } from "./styled";

export default function Content() {
    return (
        <Container>
            <Filters/>
            <ItemsContainerGrid/>
            <ItemsContainer/>
            <AddProduct/>
        </Container>
    );
}