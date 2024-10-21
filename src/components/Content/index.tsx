import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import { Container } from "./styled";

export default function Content() {
    return (
        <Container>
            <Filters/>
            <ItemsContainer/>
            <AddProduct/>
        </Container>
    );
}