'use client';

import { Product } from "@/Interfaces/interface";
import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import ItemsContainerGrid from "../ItemsContainerGrid";
import { Button, Container, MobileMenu } from "./styled";
import { useMain } from "@/context/main";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { useProductFilter } from "@/hooks/useProductFilter";
import { LuListFilter, LuPlus } from "react-icons/lu";

export default function Content() {
    const { isGridView, setLoading } = useMain();
    const [products, setProducts] = useState<Product[]>([]);
    const filteredProducts = useProductFilter(products);

    const getProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data.data);
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
            <MobileMenu>
                <Button>
                    <LuPlus size={20}/>
                    <h2>Add Product</h2>
                </Button>
                <Button>
                    <LuListFilter size={20}/>
                    <h2>Filter</h2>
                </Button>
            </MobileMenu>
            <Filters />
            {isGridView === 'grid' 
                ? <ItemsContainerGrid data={filteredProducts} getProducts={getProducts}/> 
                : <ItemsContainer data={filteredProducts} getProducts={getProducts}/>
            }
            <div className="mobileGrid">
                <ItemsContainerGrid data={filteredProducts} getProducts={getProducts}/>
            </div> 
            <AddProduct getProducts={getProducts}/>
        </Container>
    );
}