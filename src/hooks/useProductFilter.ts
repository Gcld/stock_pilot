import { useState, useEffect } from 'react';
import { Product } from '@/Interfaces/interface';
import { useMain } from '@/context/main';

export const useProductFilter = (initialProducts: Product[]) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
    const { selectedCategory } = useMain();

    useEffect(() => {
        if (selectedCategory === 0) {
            setFilteredProducts(initialProducts);
        } else {
            setFilteredProducts(initialProducts.filter(product => product.category.id === selectedCategory));
        }
    }, [selectedCategory, initialProducts]);

    return filteredProducts;
};