'use client'

import Header from "@/components/Header";
import ProductBar from "@/components/ProductBar";
import { Container } from "./styled";
import Footer from "@/components/Footer";
import ContentHistory from "@/components/ContentHistory";

export default function History() {
    return (
        <Container>
            <Header />
            <ProductBar />
            <ContentHistory />
            <Footer />
        </Container>
    );
}
