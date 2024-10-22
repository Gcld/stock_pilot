import { Button, ButtonClicked, Container} from "./styled";

export default function ProductButtons() {
    return (
        <Container>
            <ButtonClicked>
                <h3>General Information</h3>
            </ButtonClicked>
            <Button>
                <h3>Product History</h3>
            </Button>
        </Container>
    );
}