'use client';

import { Product } from "@/Interfaces/interface";
import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import ItemsContainerGrid from "../ItemsContainerGrid";
import { Container } from "./styled";
import { useMain } from "@/context/main";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { useProductFilter } from "@/hooks/useProductFilter";

export default function Content() {
    const { isGridView, setLoading } = useMain();
    const [products, setProducts] = useState<Product[]>([]);
    const filteredProducts = useProductFilter(products);

    const getProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Filters />
            {isGridView === 'grid' 
                ? <ItemsContainerGrid data={filteredProducts} getProducts={getProducts}/> 
                : <ItemsContainer data={filteredProducts} getProducts={getProducts}/>
            }
            <AddProduct getProducts={getProducts}/>
        </Container>
    );
}