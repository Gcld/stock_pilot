import React from "react";
import { Product, HistoryItem } from "@/Interfaces/interface";
import ItemHistoryCard from "../ItemHistoryCard";
import { Container, NoProductsMessage } from "./styled";

interface ItemsHistoryContainerProps {
    data: Product[]
}

export default function ItemsHistoryContainer({data}: ItemsHistoryContainerProps) {
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
                ? <NoProductsMessage>No history found.</NoProductsMessage>
                : historyItems.map((item) => (
                    <ItemHistoryCard key={item.id} data={item} />
                ))
            }
        </Container>
    );
}