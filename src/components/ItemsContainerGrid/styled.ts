import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
`;

export const NoProductsMessage = styled.h1`
    font-family: var(--font-poppins);
    font-size: 24px;
    color: var(--primaryLightZaori);
    text-align: center;
    width: 100%;
    padding: 20px;
`;
