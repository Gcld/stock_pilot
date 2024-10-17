import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    background-color: black;
    padding: 8px;
    justify-content: space-between;
`;

export const Logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    h2{
        color: var(--primaryLightZaori);
        font-family: var(--font-caveat);
        font-size: 32px;
    }
`;

export const ButtonsMiddle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const ButtonHeaderClicked = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--darkZaori);
    gap: 10px;
    border-radius: 100px;
    stroke: 1px solid var(--primaryLightZaori);
    padding: 15px;
    h3{
        font-family: var(--font-poppins);
        font-size: 16px;
    }
`;

export const ButtonHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    padding: 15px;
    border: 2px solid var(--darkZaori);
    h3{
        font-family: var(--font-poppins);
        font-size: 16px;
    }
`;