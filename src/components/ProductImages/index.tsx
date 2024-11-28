import { Container, ProductImageBig} from "./styled";
import ProductImage from '../ProuctImage';

interface ProductImagesProps {
    productId: number;
    productName: string;
}

export default function ProductImages({ productId, productName }: ProductImagesProps) {


    return (
        <Container>
            <ProductImageBig>
                <ProductImage productId={productId} alt={productName} />
            </ProductImageBig>
        </Container>
    );
}