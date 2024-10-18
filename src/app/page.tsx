'use client'

import Header from "@/components/Header";
import ProductBar from "@/components/ProductBar";
import { Container } from "./styled";

export default function Home() {
  return (
    <Container>
      <Header/>
      <ProductBar/>
    </Container>
  );
}
