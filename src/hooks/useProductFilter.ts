import { useState, useEffect } from 'react';
import { Product } from '@/Interfaces/interface';
import { useMain } from '@/context/main';

export const useProductFilter = (initialProducts: Product[]) => {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
    const { selectedCategory, alphabeticalOrder, quantityOrder, priceRange, searchBar } = useMain();

    useEffect(() => {
        let result = [...initialProducts];

        if (selectedCategory !== 0) {
            result = result.filter(product => product.category.id === selectedCategory);
        }

        if (priceRange.min !== null || priceRange.max !== null) {
            result = result.filter(product => {
                const price = parseFloat(product.price);
                if (priceRange.min !== null && priceRange.max !== null) {
                    return price >= priceRange.min && price <= priceRange.max;
                } else if (priceRange.min !== null) {
                    return price >= priceRange.min;
                } else if (priceRange.max !== null) {
                    return price <= priceRange.max;
                }
                return true;
            });
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

        if(searchBar) {
            result = result.filter(product => product.name.toLowerCase().includes(searchBar.toLowerCase()));
        }

        setFilteredProducts(result);
    }, [selectedCategory, alphabeticalOrder, quantityOrder, priceRange, searchBar, initialProducts]);

    return filteredProducts;
};