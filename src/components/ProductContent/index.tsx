import { Product } from "@/Interfaces/interface";
import ProductInfo from "../ProductInfo"; 
import ProductStockAndDescription from "../ProductStockAndDescription";
import { Container } from "./styled";

interface ProductContentProps {
    data: Product;
}

export default function ProductContent({data}: ProductContentProps) {
    return (
        <Container>
            <ProductInfo data={data}/>
            <ProductStockAndDescription data={data} />
        </Container>
    );
}