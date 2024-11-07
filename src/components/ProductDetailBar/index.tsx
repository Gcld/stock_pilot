import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { ButtonEnd, Container, GridButtons, Separator } from "./styled";
import { Product } from "@/Interfaces/interface";
import { useRouter, useParams } from "next/navigation";
import { useCallback } from "react";

interface Props {
    data: Product;
    totalProducts: number;
}

export default function ProductDetailBar({ data, totalProducts }: Props) {
    const router = useRouter();
    const params = useParams();

    const navigateProduct = useCallback((direction: 'prev' | 'next') => {
        const currentId = parseInt(params.id as string, 10);
        if (isNaN(currentId)) return;

        let newId: number;
        if (direction === 'prev') {
            newId = Math.max(1, currentId - 1);
        } else {
            newId = Math.min(totalProducts, currentId + 1);
        }

        if (newId !== currentId) {
            router.push(`/product/${newId}`);
        }
    }, [params.id, router, totalProducts]);

    return (
        <Container>
            <h1>{data.name}</h1>
            <GridButtons>
                <ButtonEnd 
                    onClick={() => navigateProduct('prev')}
                    disabled={parseInt(params.id as string, 10) <= 1}
                >
                    <div className="button-content">
                        <LuChevronLeft size={24}/>
                    </div>
                </ButtonEnd>
                <Separator />
                <ButtonEnd 
                    onClick={() => navigateProduct('next')}
                    disabled={parseInt(params.id as string, 10) >= totalProducts}
                >
                    <div className="button-content">
                        <LuChevronRight size={24}/>
                    </div>
                </ButtonEnd>
            </GridButtons>
        </Container>
    );
}