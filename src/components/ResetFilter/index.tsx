import { GrPowerReset } from "react-icons/gr";
import { Container } from "./styled";

export default function ResetFilter() {
    return (
        <Container>
            <GrPowerReset size={24}/>
            <h2>Reset Filters</h2>
        </Container>
    );
}