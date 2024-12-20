import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: #161616;
    width: 65%;
    padding: 20px 20px 50px 20px;
    border-radius: 20px;

    @media (max-width: 873px) {
        flex-direction: column;
        width: 80%;
    }


    .quantityAndDescription {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: top;
        padding-top: 20px;
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
    padding-bottom: 20px;

    @media (max-width: 321px) {
        font-size: 18px;
    }
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

        @media (max-width: 513px) {
            text-align: center;
        }
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
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const OverlayContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--darkZaori);
    max-height: 90vh;
    padding: 30px;
    border-radius: 20px;
    width: 90%;
    max-width: 680px;
    gap: 20px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    > h2 {
        font-family: var(--font-poppins);
        font-size: 28px;
        font-weight: 600;
        color: var(--primaryLightZaori);
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow-y: auto;
        padding-right: 10px;
        margin-right: -10px;
        padding-bottom: 20px;
    }

    button[type="submit"] {
        background-color: var(--primaryDarkZaori);
        color: black;
        border: none;
        padding: 15px 30px;
        border-radius: 10px;
        cursor: pointer;
        font-family: var(--font-poppins);
        font-size: 18px;
        font-weight: 500;
        transition: all 0.3s ease;
        align-self: stretch;
        margin-top: 20px;

        &:hover {
            background-color: var(--primaryLightZaori);
        }
    }

    form::-webkit-scrollbar {
        width: 8px;
    }

    form::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }

    form::-webkit-scrollbar-thumb {
        background-color: var(--primaryDarkZaori);
        border-radius: 10px;
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
    gap: 10px;

    > h2 {
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 500;
        color: var(--primaryLightZaori);
    }

    > input, textarea, ${Select} {
        width: 100%;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        border: 1px solid var(--buttonIconColor);
        border-radius: 10px;
        padding: 12px 15px;
        background-color: rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            border-color: var(--primaryLightZaori);
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }
`;

export const AdjustmentButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 20px;

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