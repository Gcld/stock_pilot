import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;

    .productImagesDiv {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
`;

export const ProductImageBig = styled.div`
    width: 677px;
    height: 404px;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 1200px) {
        width: 500px;
    }

    @media (max-width: 1023px) {
        width: 400px;
    }

    @media (max-width: 923px) {
        width: 350px;
    }

    @media (max-width: 873px) {
        width: 450px;
    }

    @media (max-width: 768px) {
        width: 350px;
    }

    @media (max-width: 400px) {
        width: 200px;
        height: 200px;
    }
`;

export const ProductImageSmall = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
`;