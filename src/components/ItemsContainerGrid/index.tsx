import React, { useState } from "react";
import { Product } from "@/Interfaces/interface";
import ItemCardGrid from "../ItemCardGrid";
import { Container, NoProductsMessage, PaginationContainer, PageButton, Wrapper, GridItem } from "./styled";

interface ItemsContainerProps {
    data: Product[];
    getProducts: () => Promise<void>;
}

export default function ItemsContainerGrid({ data, getProducts}: ItemsContainerProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <Wrapper>
            <Container>
                {data.length === 0
                    ? <NoProductsMessage>No products found.</NoProductsMessage>
                    : currentItems.map((item) => (
                        <GridItem key={item.id}>
                            <ItemCardGrid data={item} getProducts={getProducts}/>
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