import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;

export const NoProductsMessage = styled.h1`
    font-family: var(--font-poppins);
    font-size: 24px;
    color: var(--primaryLightZaori);
    text-align: center;
    width: 100%;
    padding: 20px;
`;