import ProductButtons from "../ProductButtons";
import ProductTitle from "../ProductTitle";
import SearchBar from "../SearchBar";
import { Container } from "./styled";

export default function ProductBar() {
    return (
        <Container>
            <ProductTitle/>
            <SearchBar/>
            <ProductButtons/>
        </Container>
    );
}