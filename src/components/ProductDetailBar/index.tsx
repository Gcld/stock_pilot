import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ButtonEnd, Container, GridButtons, Separator } from "./styled";
import Link from "next/link";

export default function ProductDetailBar() {
    return (
        <Container>
            <h1>Adidas NEO Greeen 36</h1>
            <GridButtons>
                <Link href="/product/0" passHref>
                    <ButtonEnd>
                        <div className="button-content">
                            <LuChevronLeft size={24}/>
                        </div>
                    </ButtonEnd>
                </Link>
                <Separator />
                <Link href="/product/2" passHref>
                    <ButtonEnd>
                        <div className="button-content">
                            <LuChevronRight size={24}/>
                        </div>
                    </ButtonEnd>
                </Link>
            </GridButtons>
        </Container>
    );
}