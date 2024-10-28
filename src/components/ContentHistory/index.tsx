import { useMain } from "@/context/main";
import Filters from "../Filters";
// import ItemsHistoryContainer from "../ItemsHistoryContainer";
import ItemsHistoryContainerGrid from "../ItemsHistoryContainerGrid";
import { Container } from "./styled";
import ItemsHistoryContainer from "../ItemsHistoryContainer";

export default function ContentHistory() {

    const { isGridView } = useMain();
    
    return (
        <Container>
            <Filters/>
            {isGridView ? <ItemsHistoryContainerGrid/> : <ItemsHistoryContainer/>}
        </Container>
    );
}