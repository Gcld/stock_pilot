import { LuSearch } from "react-icons/lu";
import { Container } from "./styled";
import { useMain } from "@/context/main";

export default function SearchBar() {

    const { searchBar: search, setSearchBar: setSearch } = useMain();

    return (
        <Container>
            <LuSearch size={20}/>
            <input placeholder="Search product..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </Container>
    );
}