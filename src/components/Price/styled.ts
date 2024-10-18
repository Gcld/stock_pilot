import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 11px;
    width: 100%;
    height: 695px;
    background-color: #161616;
    border-radius: 10px;


    h3{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: 400;
        color: var(--buttonIconColor);
    }

    .priceBox{
        display: flex;
        width: 51px;
        height: 47px;
        background-color: var(--darkZaori);
        border-radius: 10px 0px 0px 10px;
        align-items: center;
        justify-content: center;
        font-family: var(--font-poppins);
        font-weight: 400;
        font-size: 29px;
    }

    .priceDropdown{
        width: 308px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        border-radius: 10px;
        gap: 9px;
        border: 2px solid #5D5D5D;

        h2{
            font-family: var(--font-poppins);
            font-weight: 500;
            font-size: 16px;
            color: var(--buttonIconColor);
        }
    }
`;