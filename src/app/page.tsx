'use client'

import Header from "@/components/Header";
import ProductBar from "@/components/ProductBar";
import { Container } from "./styled";
import Content from "@/components/Content";

export default function Home() {
  return (
    <Container>
      <Header/>
      <ProductBar/>
      <Content/>
    </Container>
  );
}
