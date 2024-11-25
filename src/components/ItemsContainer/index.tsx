import React, { useState } from "react";
import { Product } from "@/Interfaces/interface";
import ItemCard from "../ItemCard";
import { Container, NoProductsMessage, PaginationContainer, PageButton, Wrapper } from "./styled";

interface ItemsContainerProps {
    data: Product[];
    getProducts: () => Promise<void>;
}

export default function ItemsContainer({ data, getProducts }: ItemsContainerProps) {
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
                    ? <NoProductsMessage>No products found.</NoProductsMessage>
                    : currentItems.map((item) => (
                        <ItemCard key={item.id} data={item} getProducts={getProducts}/>
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