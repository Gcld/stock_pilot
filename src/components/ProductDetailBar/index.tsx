import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ButtonEnd, Container, GridButtons, Separator } from "./styled";
import { Product } from "@/Interfaces/interface";
import { useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { api } from "@/service/api";

interface Props {
    data: Product;
    totalProducts: number;
}

export default function ProductDetailBar({ data }: Props) {
    const router = useRouter();
    const params = useParams();
    const [productIds, setProductIds] = useState<number[]>([]);

    useEffect(() => {
        const fetchProductIds = async () => {
            try {
                const response = await api.get('/products/');
                if (Array.isArray(response.data)) {
                    const ids = response.data.map(product => product.id).sort((a, b) => a - b);
                    setProductIds(ids);
                }
            } catch (error) {
                console.error("Error fetching product IDs:", error);
            }
        };

        fetchProductIds();
    }, []);

    const navigateProduct = useCallback((direction: 'prev' | 'next') => {
        const currentId = parseInt(params.id as string, 10);
        if (isNaN(currentId) || productIds.length === 0) return;

        const currentIndex = productIds.indexOf(currentId);
        let newIndex: number;

        if (direction === 'prev') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : productIds.length - 1;
        } else {
            newIndex = currentIndex < productIds.length - 1 ? currentIndex + 1 : 0;
        }

        const newId = productIds[newIndex];
        if (newId !== currentId) {
            router.push(`/product/${newId}`);
        }
    }, [params.id, router, productIds]);

    return (
        <Container>
            <h1>{data.name}</h1>
            <GridButtons>
                <ButtonEnd 
                    onClick={() => navigateProduct('prev')}
                    disabled={productIds.length <= 1}
                >
                    <div className="button-content">
                        <LuChevronLeft size={24}/>
                    </div>
                </ButtonEnd>
                <Separator />
                <ButtonEnd 
                    onClick={() => navigateProduct('next')}
                    disabled={productIds.length <= 1}
                >
                    <div className="button-content">
                        <LuChevronRight size={24}/>
                    </div>
                </ButtonEnd>
            </GridButtons>
        </Container>
    );
}