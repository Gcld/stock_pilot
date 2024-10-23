import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: #161616;
    width: 100%;
    padding: 20px 20px 50px 20px;
    border-radius: 20px;

    .quantityAndDescription {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        background-color: var(--darkZaori);
        border-radius: 20px;
        gap: 20px;

        .AdjustStockButton {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            padding: 8px;
            border: 1px solid var(--primaryDarkZaori);
            border-radius: 10px;
            
            h2 {
                font-family: var(--font-poppins);
                font-size: 20px;
                font-weight: 400;
                color: var(--primaryDarkZaori);
            }
        }

        h3 {
            font-family: var(--font-poppins);
            font-size: 16px;
            font-weight: 400;
            color: var(--buttonIconColor);
            padding-top: 10px;
        }

        h2 {
            font-family: var(--font-poppins);
            font-size: 36px;
            font-weight: 400;
            color: var(--primaryLightZaori);
        }
    }

    h1 {
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 600; 
        color: var(--primaryLightZaori);
        padding-bottom: 10px;
        align-self: flex-start; 
    }
`;

export const Separator = styled.div`
    width: 100%; 
    height: 1px;
    background-color: var(--buttonIconColor);
`;

export const Description = styled.div`
    font-family: var(--font-poppins);
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    padding: 10px;
`;