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
import { useParams } from 'next/navigation';

export default function ProductDetail() {
    const params = useParams();
    const [tab, setTab] = useState(0);
    const { setShowMenu } = useMain();
    const [product, setProduct] = useState<Product>({} as Product);
    const [totalProducts, setTotalProducts] = useState(0);

    const getProduct = async () => {
        try {
            const response = await api.post(`/products`, {id: params.id});
            console.log("RESPONSEPRODUCT", response.data);
            setProduct(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getTotalProducts = async () => {
        try {
            const response = await api.get('/products');
            setTotalProducts(response.data.length);
        } catch (error) {
            console.log(error);
        }
    }

        

    // const getProductLocal = async () => {
    //     await api.post(`/products`, {id: params.id}).then((response) => {
    //         console.log("RESPONSE", response.data);
    //         setProduct(response.data.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }


    useEffect(() => {
        setShowMenu(false);
        if (params.id) {
            getProduct();
        }
        getTotalProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id, setShowMenu]);

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