'use client'

import ProductDetailBar from "@/components/ProductDetailBar";
import { Container } from "./styled";
import { ItemInfo } from "@/components/ItemInfo";
import ProductButtons from "@/components/ProductButtons";
import ProductContent from "@/components/ProductContent";
import { useEffect, useState } from "react";
import ProductHistory from "@/components/ProductHistory";
import { useMain } from "@/context/main";
import { Product } from "@/Interfaces/interface";
import { api } from "@/service/api";
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetail() {
    const params = useParams();
    const router = useRouter();
    const [tab, setTab] = useState(0);
    const { setShowMenu } = useMain();
    const [product, setProduct] = useState<Product | null>(null);
    const [totalProducts, setTotalProducts] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const getProduct = async (id: number) => {
        try {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
            router.push('/404');
        }
        finally {
            setIsLoading(false);
        }
    }

    const getTotalProducts = async () => {
        try {
            const response = await api.get('/products');
            if (Array.isArray(response.data)) {
                const total = response.data.length;
                setTotalProducts(total);
            } else if (typeof response.data === 'object' && response.data) {
                const total = response.data.length;
                setTotalProducts(total);
            } else {
                console.error("Unexpected response format:", response.data);
                setTotalProducts(0);
            }
        } catch (error) {
            console.error("Error fetching total products:", error);
            setTotalProducts(0);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        setShowMenu(false);
        const fetchData = async () => {
            if (params.id) {
                await getProduct(Number(params.id));
            }
            await getTotalProducts();
        };
        fetchData();
    }, [params.id, setShowMenu]);

    if (isLoading || !product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ProductDetailBar data={product} totalProducts={totalProducts} />5
            <ItemInfo data={product} />
            <ProductButtons setTab={setTab} />
            {tab === 0 && <ProductContent data={product} getProduct={getProduct} />}
            {tab === 1 && <ProductHistory data={product} getProduct={getProduct} />}
        </Container>
    );
}