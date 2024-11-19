import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
`;

export const NoProductsMessage = styled.h1`
    font-family: var(--font-poppins);
    font-size: 24px;
    color: var(--primaryLightZaori);
    text-align: center;
    width: 100%;
    padding: 20px;
    grid-column: 1 / -1;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 10px 0;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
    margin: 0 5px;
    padding: 8px 12px;
    border: 1px solid var(--primaryDarkZaori);
    background-color: ${props => props.$isActive ? 'var(--primaryDarkZaori)' : 'white'};
    color: ${props => props.$isActive ? 'white' : 'var(--primaryDarkZaori)'};
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-family: var(--font-poppins);
    font-size: 14px;

    &:hover {
        background-color: var(--primaryDarkZaori);
        color: white;
    }
`;