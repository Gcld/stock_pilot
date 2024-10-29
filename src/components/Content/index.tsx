'use client';

import { Product } from "@/Interfaces/interface";
import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import ItemsContainerGrid from "../ItemsContainerGrid";
import { Container } from "./styled";
import { useMain } from "@/context/main";
import { apiLocal } from "@/service/api";
import { useEffect, useState } from "react";

export default function Content() {
    const { isGridView } = useMain();
    const [products, setProducts] = useState<Product[]>([]);

    const getProducts = async () => {
        await apiLocal.get('/products').then((response) => {
            console.log("RESPONSE", response.data);
            setProducts(response.data.products);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container>
            <Filters />
            {isGridView ? <ItemsContainerGrid data={products} /> : <ItemsContainer data={products}/>}
            <AddProduct />
        </Container>
    );
}