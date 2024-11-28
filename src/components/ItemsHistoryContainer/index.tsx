import React, { useState } from "react";
import { HistoryItem } from "@/Interfaces/interface";
import ItemHistoryCard from "../ItemHistoryCard";
import { Container, NoProductsMessage, PaginationContainer, PageButton, Wrapper } from "./styled";

interface ItemsHistoryContainerProps {
    data: HistoryItem[]
}

export default function ItemsHistoryContainer({data}: ItemsHistoryContainerProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const reversedItems = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    const currentItems = reversedItems.slice(indexOfFirstItem, indexOfLastItem);

    console.log("REVERSEDITEMS",reversedItems);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Wrapper>
            <Container>
                {data.length === 0 
                    ? <NoProductsMessage>No history found.</NoProductsMessage>
                    : currentItems.map((item) => (
                        <ItemHistoryCard key={item.id} data={item} />
                    ))
                }
            </Container>
            {data.length > 0 && (
                <PaginationContainer>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <PageButton 
                            key={i + 1} 
                            onClick={() => paginate(i + 1)}
                            $isActive={currentPage === i + 1}
                        >
                            {i + 1}
                        </PageButton>
                    ))}
                </PaginationContainer>
            )}
        </Wrapper>
    );
}