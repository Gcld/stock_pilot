import { useState, useEffect } from 'react';
import { Product } from '@/Interfaces/interface';
import { useMain } from '@/context/main';

export const useProductFilter = (initialProducts: Product[]) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
    const { selectedCategory, alphabeticalOrder } = useMain();

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

        setFilteredProducts(result);
    }, [selectedCategory, alphabeticalOrder, initialProducts]);

    return filteredProducts;
};