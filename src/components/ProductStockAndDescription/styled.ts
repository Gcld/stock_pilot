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

        h3 {
            font-family: var(--font-poppins);
            font-size: 16px;
            font-weight: 400;
            color: var(--buttonIconColor);
            padding-top: 10px;
        }

        > h2 {
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

export const AdjustStockButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding: 8px;
    border: 1px solid var(--primaryDarkZaori);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--primaryDarkZaori);
    }

    > h2 {
        font-family: var(--font-poppins);
        font-size: 20px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
        transition: color 0.3s ease;
    }

    &:hover h2 {
        color: var(--darkZaori);
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow-y: scroll; 
`;

export const OverlayContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--darkZaori);
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 680px;
    gap: 30px;

    > h2 {
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }

    button {
        background-color: black;
        color: white;
        border: 1.5px solid var(--buttonIconColor);
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--buttonIconColor);
            color: black;
            border-color: black;
        }
    }
`;

export const Select = styled.select`
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 400;
    color: #9B9B9B;
    background-color: transparent;
    border: 1px solid #9B9B9B;
    border-radius: 20px;
    padding: 20px 10px;
    width: 100%;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="%239B9B9B" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    option {
        background-color: var(--darkZaori);
        color: #9B9B9B;
    }
`;

export const AdjustmentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h2 {
        width: 100%;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }

    > h3 {
        width: 100%;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: #9B9B9B;
        border: 1px solid #9B9B9B;
        border-radius: 20px;
        padding: 20px 0px 20px 10px;
    }
`;

export const AdjustmentButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;

    > h2 {
        width: 100%;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }
`;

export const ButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    border: 1.5px solid var(--buttonIconColor);
    border-radius: 20px;
    gap: 42px;

    > h2{
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        color: #9B9B9B;
    }
`;

export const ButtonsMovementDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    border: 1.5px solid var(--buttonIconColor);
    border-radius: 20px;
    gap: 42px;

    &:hover{
        background-color: var(--buttonIconColor);

        > h2{
            color: var(--darkZaori);
        }
    }

    > h2{
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        color: #9B9B9B;
    }
`;

export const PlusOrMinusButton = styled.div`
    height: 37px;
    width: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--buttonIconColor);
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: var(--buttonIconColor);
        
        svg {
            color: var(--darkZaori) !important;
        }
    }
`;