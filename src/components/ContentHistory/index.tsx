import Filters from "../Filters";
// import ItemsHistoryContainer from "../ItemsHistoryContainer";
import ItemsHistoryContainerGrid from "../ItemsHistoryContainerGrid";
import { Container } from "./styled";

export default function ContentHistory() {
    return (
        <Container>
            <Filters/>
            <ItemsHistoryContainerGrid/>
            {/* <ItemsHistoryContainer/> */}
        </Container>
    );
}