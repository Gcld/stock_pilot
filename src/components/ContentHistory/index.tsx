import { useMain } from "@/context/main";
import Filters from "../Filters";
import ItemsHistoryContainerGrid from "../ItemsHistoryContainerGrid";
import { Container } from "./styled";
import ItemsHistoryContainer from "../ItemsHistoryContainer";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { Product } from "@/Interfaces/interface";
import { useProductFilter } from "@/hooks/useProductFilter";

export default function ContentHistory() {
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
            <Filters/>
            {isGridView === 'grid' 
                ? <ItemsHistoryContainerGrid data={filteredProducts}/> 
                : <ItemsHistoryContainer data={filteredProducts}/>
            }
        </Container>
    );
}
