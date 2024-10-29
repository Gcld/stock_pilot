'use client'

import ProductBar from "@/components/ProductBar";
import { Container } from "./styled";
import Content from "@/components/Content";
import { useMain } from "@/context/main";
import ContentHistory from "@/components/ContentHistory";
import Loading from "@/components/Loading";

export default function Home() {

  const {tabGeneral, loading} = useMain();

  return (
    <Container>
      {loading && <Loading/>}
      <ProductBar/>
      {tabGeneral === 0 && <Content/>}
      {tabGeneral === 1 && <ContentHistory/>}
    </Container>
  );
}