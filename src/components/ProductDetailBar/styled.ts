import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 30px;
    justify-content: space-between;

    h1{
        font-family: var(--font-poppins);
        font-size: 36px;
        font-weight: 600;
        color: var(--primaryLightZaori);
    }
`;

export const GridButtons = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--darkZaori);
    border-radius: 10px;
    border: 1px solid var(--buttonIconColor);
    position: relative;
`;

export const ButtonEnd = styled.div`
    display: flex;
    width: 50px;
    height: 46px;
    border-radius: 10px;
    background-color: var(--darkZaori);
    align-items: center;
    justify-content: center;
`;

export const Separator = styled.div`
    position: absolute;
    top: 0%; 
    left: 50%;
    height: 100%; 
    width: 1px;
    background-color: var(--buttonIconColor);
`;