import React from "react";
import { Container, Header, Content, Footer, ItemPicture, ProductName, MovementInfo, MovementType, QuantityInfo } from "./styled";
import ProductImage from "../ProuctImage";
import { HistoryItem } from "@/Interfaces/interface";

interface Props {
    data: HistoryItem;
}

export default function ItemHistoryCardGrid({ data }: Props) {
    const isEntrada = data.movement_type === 'IN';

    return (
        <Container $isEntrada={isEntrada}>
            <Header>
                <ItemPicture>
                    <ProductImage productId={data.product.id} alt={data.product.name} />
                </ItemPicture>
                <ProductName>{data.product.name}</ProductName>
            </Header>
            <Content>
                <MovementInfo>Movement ID: {data.id}</MovementInfo>
                <MovementInfo>Date: {new Date(data.created_at).toLocaleDateString()}</MovementInfo>
                <MovementType $isEntrada={isEntrada}>
                    {isEntrada ? 'In' : 'Out'}
                </MovementType>
            </Content>
            <Footer>
                <QuantityInfo>Quantity: {data.quantity}</QuantityInfo>
                <MovementInfo>Reason: {data.reason}</MovementInfo>
            </Footer>
        </Container>
    )
}