import React from "react";
import { HistoryItem } from "@/Interfaces/interface";
import ItemHistoryCardGrid from "../ItemHistoryCardGrid";
import { Container, NoProductsMessage } from "./styled";

interface ItemsHistoryContainerGridProps {
    data: HistoryItem[]
}

export default function ItemsHistoryContainerGrid({data}: ItemsHistoryContainerGridProps) {

    const historyItems: HistoryItem[] = data.map(data => data);

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