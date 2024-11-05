import { Container } from "./styled";
import Price from "../Price";
import ResetFilter from "../ResetFilter";
import ProductFilters from "../ProductFilters";

export default function Filters() {
    return (
        <Container>
            <ProductFilters/>
            <Price/>
            <ResetFilter/>
        </Container>
    );
}