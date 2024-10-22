import Filters from "../Filters";
import ItemsHistoryContainer from "../ItemsHistoryContainer";
import { Container } from "./styled";

export default function ContentHistory() {
    return (
        <Container>
            <Filters/>
            <ItemsHistoryContainer/>
        </Container>
    );
}