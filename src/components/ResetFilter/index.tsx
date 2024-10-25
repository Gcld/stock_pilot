import { GrPowerReset } from "react-icons/gr";
import { Container } from "./styled";

export default function ResetFilter() {
    return (
        <Container>
            <div className="content">
                <GrPowerReset size={24}/>
                <h2>Reset Filters</h2>
            </div>
        </Container>
    );
}