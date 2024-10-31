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

export default function ProductDetail({ params }: { params: { id: string } }) {

    const [tab, setTab] = useState(0);
    const {setShowMenu} = useMain();
    const [product, setProduct] = useState<Product>({} as Product);

    const getProduct = async () => {
        await api.get(`/products/${params.id}`).then((response) => {
            console.log("RESPONSE", response.data);
            setProduct(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }
        

    const getProductLocal = async () => {
        await api.post(`/products`, {id: params.id}).then((response) => {
            console.log("RESPONSE", response.data);
            setProduct(response.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }


    useEffect(() => {
        setShowMenu(false);
        // getProduct();
        getProductLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setShowMenu])

    return (
        <Container>
            <ProductDetailBar data ={product}/>
            <ItemInfo data ={product}/>
            <ProductButtons setTab={setTab}/>
            {tab === 0 && <ProductContent data ={product}/>}
            {tab == 1 && <ProductHistory />}
        </Container>
    );
}
