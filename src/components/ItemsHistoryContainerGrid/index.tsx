import React from "react";
import { Product, HistoryItem } from "@/Interfaces/interface";
import ItemHistoryCardGrid from "../ItemHistoryCardGrid";
import { Container, NoProductsMessage } from "./styled";

interface ItemsHistoryContainerGridProps {
    data: Product[]
}

export default function ItemsHistoryContainerGrid({data}: ItemsHistoryContainerGridProps) {
    // Função para gerar um HistoryItem mock a partir de um Product
    const generateMockHistoryItem = (product: Product): HistoryItem => {
        return {
            id: Math.floor(Math.random() * 1000), // ID aleatório para o movimento
            product: {
                id: product.id,
                name: product.name
            },
            movement_type: Math.random() > 0.5 ? 'entrada' : 'saida', // Tipo de movimento aleatório
            quantity: Math.floor(Math.random() * 100), // Quantidade aleatória
            reason: Math.random() > 0.5 ? 'Restock' : 'Sale', // Razão aleatória
            created_at: new Date().toISOString() // Data atual
        };
    };

    const historyItems: HistoryItem[] = data.map(generateMockHistoryItem);

    return (
        <Container>
            {historyItems.length === 0 
                ? <NoProductsMessage>No history found</NoProductsMessage>
                : historyItems.map((item) => (
                    <ItemHistoryCardGrid key={item.id} data={item} />
                ))
            }
        </Container>
    );
}