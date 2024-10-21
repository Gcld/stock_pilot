'use client'

import Header from "@/components/Header";
import ProductBar from "@/components/ProductBar";
import { Container } from "./styled";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
      <Header/>
      <ProductBar/>
      <Content/>
      <Footer/>
    </Container>
  );
}
