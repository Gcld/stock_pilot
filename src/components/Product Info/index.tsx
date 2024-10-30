import { Product } from "@/Interfaces/interface";
import ProductImages from "../ProductImages";
import { Container, InfoContent, InfoDiv, InfoTitle, InfoWrapper } from "./styled";

interface ProductInfoProps {
    data: Product
}

export default function ProductInfo({data}: ProductInfoProps) {
    return (
        <Container>
            <ProductImages/>
            <div className="productInfoDiv">
                <h1>Basic Information</h1>
                <InfoWrapper>
                    <InfoDiv>
                        <InfoTitle>PRICE</InfoTitle>
                        <InfoContent>${data.price}</InfoContent>
                    </InfoDiv>
                    <InfoDiv>
                        <InfoTitle>CATEGORY</InfoTitle>
                        <InfoContent>{data.category.name}</InfoContent>
                    </InfoDiv>
                    <InfoDiv>
                        <InfoTitle>TOTAL BE PACKED</InfoTitle>
                        <InfoContent>{data.stock_quantity === 0 ? 'Out of Stock' : 'Stocked Product'}</InfoContent>
                    </InfoDiv>
                </InfoWrapper>
            </div>
        </Container>
    );
}