import styled from "styled-components";

export const Container = styled.div`
    height: 98px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--darkZaori);
    border-radius: 10px;
    padding: 8px;
`;

export const ItemPicture = styled.div`
    width: 240px;
    height: 82px;
    background-color: white;
    border-radius: 5px;
`;

export const ItemInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-right: 20px;
    border-right: 1px solid var(--buttonIconColor);

    > h1{
        padding-left: 20px;
        font-family: var(--font-poppins);
        font-size: 24px;
        font-weight: 400;
        color: white;
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    gap: 3px;
    padding-left: 10px;

    h2{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: #8D8D8D;
    }

    .inStock{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: white;
    }
`;

export const ItemPriceAndButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 40px;

    > h1{
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }
`;