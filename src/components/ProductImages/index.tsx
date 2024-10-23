import { Container } from "./styled";


export default function ProductImages() {
    return (
        <Container>
            <div className="productImageBig"></div>
            <div className="productImagesDiv">
                <div className="productImageSmall"></div>
                <div className="productImageSmall"></div>
                <div className="productImageSmall"></div>
                <div className="productImageSmall"></div>
            </div>
        </Container>
    );
}
