'use client'

import ProductDetailBar from "@/components/ProductDetailBar";
import { Container } from "./styled";
import { ItemInfo } from "@/components/ItemInfo";
import ProductButtons from "@/components/ProductButtons";
import ProductContent from "@/components/ProductContent";
import { useState } from "react";
import ProductHistory from "@/components/ProductHistory";

export default function ProductDetail(){

    const [tab, setTab] = useState(0);

    return (
        <Container>
            <ProductDetailBar />
            <ItemInfo/>
            <ProductButtons setTab={setTab}/>
            {tab === 0 && <ProductContent />}
            {tab == 1 && <ProductHistory />}
        </Container>
    );
}
