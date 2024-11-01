import { useState, useEffect } from 'react';
import { Product } from '@/Interfaces/interface';
import { useMain } from '@/context/main';

export const useProductFilter = (initialProducts: Product[]) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
    const { selectedCategory, alphabeticalOrder, quantityOrder } = useMain();

    useEffect(() => {
        let result = [...initialProducts];

        if (selectedCategory !== 0) {
            result = result.filter(product => product.category.id === selectedCategory);
        }

        if (alphabeticalOrder) {
            result.sort((a, b) => {
                if (alphabeticalOrder === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
        }

        if (quantityOrder) {
            result.sort((a, b) => {
                if (quantityOrder === 'asc') {
                    return a.stock_quantity - b.stock_quantity;
                } else {
                    return b.stock_quantity - a.stock_quantity;
                }
            });
        }

        setFilteredProducts(result);
    }, [selectedCategory, alphabeticalOrder, quantityOrder, initialProducts]);

    return filteredProducts;
};