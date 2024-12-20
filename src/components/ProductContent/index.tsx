import { Product } from "@/Interfaces/interface";
import ProductInfo from "../ProductInfo"; 
import ProductStockAndDescription from "../ProductStockAndDescription";
import { Container } from "./styled";

interface ProductContentProps {
    data: Product;
    getProduct: (id: number) => Promise<void>;
}

export default function ProductContent({data, getProduct}: ProductContentProps) {
    return (
        <Container>
            <ProductInfo data={data}/>
            <ProductStockAndDescription data={data} getProduct={getProduct} />
        </Container>
    );
}