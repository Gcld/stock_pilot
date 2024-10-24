'use client'

import ProductBar from "@/components/ProductBar";
import { Container } from "./styled";
import Content from "@/components/Content";
import { useMain } from "@/context/main";
import ContentHistory from "@/components/ContentHistory";

export default function Home() {

  const {tabGeneral} = useMain();

  return (
    <Container>
      <ProductBar/>
      {tabGeneral === 0 && <Content/>}
      {tabGeneral === 1 && <ContentHistory/>}
    </Container>
  );
}