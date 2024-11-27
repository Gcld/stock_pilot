'use client';

import { Product } from "@/Interfaces/interface";
import AddProduct from "../AddProduct";
import Filters from "../Filters";
import ItemsContainer from "../ItemsContainer";
import ItemsContainerGrid from "../ItemsContainerGrid";
import { Button, Container, MobileMenu, MobileMenuOverlay } from "./styled";
import { useMain } from "@/context/main";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { useProductFilter } from "@/hooks/useProductFilter";
import { LuListFilter, LuPlus, LuX } from "react-icons/lu";

export default function Content() {
    const { isGridView, setLoading } = useMain();
    const [products, setProducts] = useState<Product[]>([]);
    const filteredProducts = useProductFilter(products);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

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

    useEffect(() => {
        if (showAddProduct || showFilters) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [showAddProduct, showFilters]);

    const toggleAddProduct = () => setShowAddProduct(!showAddProduct);
    const toggleFilters = () => setShowFilters(!showFilters);

    return (
        <Container>
            <MobileMenu>
                <Button onClick={toggleAddProduct}>
                    <LuPlus size={20}/>
                    <h2>Add Product</h2>
                </Button>
                <Button onClick={toggleFilters}>
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
            {showAddProduct && (
                <MobileMenuOverlay>
                    <Button onClick={toggleAddProduct}>
                        <LuX size={20}/>
                        <h2>Close</h2>
                    </Button>
                    <AddProduct getProducts={getProducts}/>
                </MobileMenuOverlay>
            )}
            {showFilters && (
                <MobileMenuOverlay>
                    <Button onClick={toggleFilters}>
                        <LuX size={20}/>
                        <h2>Close</h2>
                    </Button>
                    <Filters />
                </MobileMenuOverlay>
            )}
        </Container>
    );
}