import React, { useState } from "react";
import { HistoryItem } from "@/Interfaces/interface";
import ItemHistoryCardGrid from "../ItemHistoryCardGrid";
import { Container, NoProductsMessage, PaginationContainer, PageButton, Wrapper, GridItem } from "./styled";

interface ItemsHistoryContainerGridProps {
    data: HistoryItem[]
}

export default function ItemsHistoryContainerGrid({data}: ItemsHistoryContainerGridProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Wrapper>
            <Container>
                {data.length === 0 
                    ? <NoProductsMessage>No history found</NoProductsMessage>
                    : currentItems.map((item) => (
                        <GridItem key={item.id}>
                            <ItemHistoryCardGrid data={item} />
                        </GridItem>
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