import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ButtonEnd, Container, GridButtons, Separator } from "./styled";

export default function ProductDetailBar() {
    return (
        <Container>
            <h1>Adidas NEO Greeen 36</h1>
            <GridButtons>
                <ButtonEnd>
                    <LuChevronLeft size={24}/>
                </ButtonEnd>
                <Separator />
                <ButtonEnd>
                    <LuChevronRight size={24}/>
                </ButtonEnd>
            </GridButtons>
        </Container>
    );
}