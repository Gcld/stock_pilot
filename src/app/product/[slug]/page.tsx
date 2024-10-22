'use client'

import Header from "@/components/Header";

import Footer from "@/components/Footer";
import ProductDetailBar from "@/components/ProductDetailBar";
import { Container } from "./styled";
import { ItemInfo } from "@/components/ItemInfo";
import ProductButtons from "@/components/ProductButtons";

export default function ProductDetail(){
    return (
        <Container>
            <Header />
            <ProductDetailBar />
            <ItemInfo/>
            <ProductButtons/>
            <Footer />
        </Container>
    );
}
