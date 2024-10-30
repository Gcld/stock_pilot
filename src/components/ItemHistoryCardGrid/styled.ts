import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 29px;
    background-color: var(--darkZaori);
    border-radius: 10px;
    padding: 15px;
`;

export const ItemPicture = styled.div`
    width: 100%;
    height: 150px;
    background-color: white;
    border-radius: 5px;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;

    h1 {
        font-family: var(--font-poppins);
        font-size: 24px;
        font-weight: 400;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        width: 100%; 
        text-align: center;
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3px;
    width: 100%; 
    white-space: nowrap; 
    overflow: hidden; 

    > h2 {
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: #8D8D8D;
    }

    .inStock {
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: white;
    }
`;

export const ItemPriceAndButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;

    > h1{
        display: flex;
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        color: var(--primaryLightZaori);
        align-content: left;
        justify-content: left;
    }
`;