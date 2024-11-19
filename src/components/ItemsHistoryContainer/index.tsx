import React from "react";
import { HistoryItem } from "@/Interfaces/interface";
import ItemHistoryCard from "../ItemHistoryCard";
import { Container, NoProductsMessage } from "./styled";

interface ItemsHistoryContainerProps {
    data: HistoryItem[]
}

export default function ItemsHistoryContainer({data}: ItemsHistoryContainerProps) {

    const historyItems: HistoryItem[] = data.map(data => data);

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