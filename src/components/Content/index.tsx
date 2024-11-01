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

export default function Content() {
    const { isGridView, setLoading, selectedCategory } = useMain();
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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
    }, [])

    useEffect(() => {
        if (selectedCategory === 0) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category.id === selectedCategory));
        }
    }, [selectedCategory, products]);

    return (
        <Container>
            <Filters />
            {isGridView === 'grid' 
                ? <ItemsContainerGrid data={filteredProducts} /> 
                : <ItemsContainer data={filteredProducts} />
            }
            <AddProduct />
        </Container>
    );
}