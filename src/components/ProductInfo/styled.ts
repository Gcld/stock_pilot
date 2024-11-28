import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 873px) {
        align-items: center;
    }

    .productInfoDiv {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h1 {
            font-family: var(--font-poppins);
            font-size: 32px;
            font-weight: 400;
            color: var(--primaryLightZaori);
        }
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-content: center;
`;

export const InfoTitle = styled.h3`
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 400;
    color: var(--buttonIconColor);
    width: 150px;
`;

export const InfoContent = styled.h3`
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 400;
    color: var(--primaryLightZaori);
`;