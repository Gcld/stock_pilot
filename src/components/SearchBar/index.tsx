import { LuSearch } from "react-icons/lu";
import { Container } from "./styled";

export default function SearchBar() {
    return (
        <Container>
            <LuSearch size={20}/>
            <h2>Search product...</h2>
        </Container>
    );
}