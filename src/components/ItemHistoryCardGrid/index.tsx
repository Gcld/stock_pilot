import React from "react";
import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton, MovementType } from "./styled";
import ProductImage from "../ProuctImage";
import { HistoryItem } from "@/Interfaces/interface";

interface Props {
    data: HistoryItem;
}

export default function ItemHistoryCardGrid({ data }: Props) {
    const isEntrada = data.movement_type === 'entrada';

    return (
        <Container $isEntrada={isEntrada}>
            <ItemPicture>
                <ProductImage productId={data.product.id} alt={data.product.name} />
            </ItemPicture>
            <ItemInfo>
                <h1>{data.product.name}</h1>
                <ItemDescription>
                    <h2>Movement ID: {data.id}</h2>
                    <h2>Date: {new Date(data.created_at).toLocaleDateString()}</h2>
                </ItemDescription>
            </ItemInfo>
            <ItemPriceAndButton>
                <MovementType $isEntrada={isEntrada}>
                    {isEntrada ? 'Entrada' : 'Saída'}
                </MovementType>
                <h2>Quantity: {data.quantity}</h2>
                <h2>Reason: {data.reason}</h2>
            </ItemPriceAndButton>
        </Container>
    )
}