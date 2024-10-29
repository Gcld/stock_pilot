import { Container } from "./styled";

export default function Loading() {
    return (
        <Container>
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Container>
    );
}