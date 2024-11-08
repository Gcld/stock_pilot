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

    const getProduct = async (id: string) => {
        try {
            const response = await api.post(`/products`, {id: id});
            console.log("Product fetched:", response.data.data);
            setProduct(response.data.data);
        } catch (error) {
            console.error("Error fetching product:", error);
            router.push('/404');
        }
    }

    const getTotalProducts = async () => {
        try {
            const response = await api.get('/products');
            if (Array.isArray(response.data)) {
                const total = response.data.length;
                console.log("Total products fetched:", total);
                setTotalProducts(total);
            } else if (typeof response.data === 'object' && response.data.data) {
                const total = response.data.data.length;
                console.log("Total products fetched:", total);
                setTotalProducts(total);
            } else {
                console.error("Unexpected response format:", response.data);
                setTotalProducts(0);
            }
        } catch (error) {
            console.error("Error fetching total products:", error);
            setTotalProducts(0);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        setShowMenu(false);
        const fetchData = async () => {
            if (params.id) {
                await getProduct(params.id as string);
            }
            await getTotalProducts();
            setIsLoading(false);
        };
        fetchData();
    }, [params.id, setShowMenu]);

    useEffect(() => {
        console.log("ProductDetail state updated:", { product, totalProducts, isLoading });
    }, [product, totalProducts, isLoading]);

    if (isLoading || !product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <ProductDetailBar data={product} totalProducts={totalProducts} />
            <ItemInfo data={product} />
            <ProductButtons setTab={setTab} />
            {tab === 0 && <ProductContent data={product} />}
            {tab === 1 && <ProductHistory data={product} />}
        </Container>
    );
}