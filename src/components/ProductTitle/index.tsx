import { Product } from "@/Interfaces/interface";
import { Container, TotalProducts } from "./styled";
import { useEffect, useState } from "react";
import { api } from "@/service/api";

export default function ProductTitle() {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalProducts, setTotalProducts] = useState(0);
    
    const getProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            setTotalProducts(products.length);
        }
    }, [products]);

    return (
        <Container>
            <h1>Product</h1>
            <TotalProducts>
                <h2>{totalProducts}</h2>
                <h3>total products</h3>
            </TotalProducts>
        </Container>
    );
}