import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    .productImages{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .productImageBig{
        width: 677px;
        height: 404px;
        background-color: var(--primaryLightZaori);
        border-radius: 20px;
    }

    .productImagesDiv{
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .productImageSmall{
        width: 96px;
        height: 96px;
        background-color: var(--primaryLightZaori);
        border-radius: 20px;
    }
`;
