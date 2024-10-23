import ProductImages from "../ProductImages";
import { Container, InfoContent, InfoDiv, InfoTitle, InfoWrapper } from "./styled";

export default function ProductInfo() {
    return (
        <Container>
            <ProductImages/>
            <div className="productInfoDiv">
                <h1>Basic Information</h1>
                <InfoWrapper>
                    <InfoDiv>
                        <InfoTitle>PRICE</InfoTitle>
                        <InfoContent>$140.50</InfoContent>
                    </InfoDiv>
                    <InfoDiv>
                        <InfoTitle>CATEGORY</InfoTitle>
                        <InfoContent>Shoe</InfoContent>
                    </InfoDiv>
                    <InfoDiv>
                        <InfoTitle>TOTAL BE PACKED</InfoTitle>
                        <InfoContent>Stocked Product</InfoContent>
                    </InfoDiv>
                </InfoWrapper>
            </div>
        </Container>
    );
}