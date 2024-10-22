import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 62px;
    flex-direction: row;
    justify-content: center;
`;

export const Button = styled.div`
    display: flex;
    border-radius: 0px 10px 10px 0px;
    align-items: center;
    border: 1px solid var(--buttonIconColor);
    justify-content: center;

    h3{
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: var(--buttonIconColor);
        padding: 20px;
    }
`;

export const ButtonClicked = styled.div`
    display: flex;
    border-radius: 10px 0px 0px 10px;
    align-items: center;
    border: 1px solid var(--primaryLightZaori);
    background-color: var(--darkZaori);
    justify-content: center;  
    h3{
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
        padding: 20px;
    }  
`;