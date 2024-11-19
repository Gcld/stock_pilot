import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 600px; 
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 22px;
    flex: 1;
    overflow-y: auto;
    padding-right: 20px;
    min-height: 0; 
`;

export const NoProductsMessage = styled.h1`
    font-family: var(--font-poppins);
    font-size: 24px;
    color: var(--primaryLightZaori);
    text-align: center;
    width: 100%;
    padding: 20px;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background-color: var(--background);
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
    margin: 0 5px;
    padding: 8px 12px;
    border: 1px solid var(--primaryDarkZaori);
    background-color: ${props => props.$isActive ? 'var(--primaryDarkZaori)' : 'var(--background)'};
    color: ${props => props.$isActive ? 'var(--background)' : 'var(--darkZaori)'};
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-family: var(--font-poppins);
    font-size: 14px;
    font-weight: 500;

    &:hover {
        background-color: var(--primaryDarkZaori);
        color: var(--background);
    }
`;