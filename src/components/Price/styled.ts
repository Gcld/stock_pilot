import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
    width: 100%;
    background-color: #161616;
    border-radius: 10px;
    padding: 0px 9px 0px 9px;

    h3 {
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: 400;
        color: var(--buttonIconColor);
    }

    .priceBox {
        display: flex;
        width: 51px;
        height: 100%;
        background-color: var(--darkZaori);
        border-radius: 9px 0px 0px 9px;
        align-items: center;
        justify-content: center;
        font-family: var(--font-poppins);
        font-weight: 400;
        font-size: 29px;
        color: var(--primaryLightZaori);
    }

    .priceDropdown {
        width: 308px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 2px solid #5D5D5D;
        background-color: transparent;
        transition: border-color 0.3s ease;

        &:focus-within {
            border-color: var(--primaryDarkZaori);
        }
    }
`;

export const PriceInput = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 15px;
    font-family: var(--font-poppins);
    font-size: 16px;
    color: var(--primaryLightZaori);

    &::placeholder {
        color: var(--buttonIconColor);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;