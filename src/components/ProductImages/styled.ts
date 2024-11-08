import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

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
`;

export const ProductImageSmall = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
`;