import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1px;
    background-color: var(--darkZaori);
    border-radius: 10px;

    .buttonsClicked{
        display: flex;
        width: 50px;
        height: 46px;
        border-radius: 10px;
        background-color: var(--darkZaori);
        align-items: center;
        justify-content: center;
        border: 1px solid var(--primaryDarkZaori);
    }
    .buttons{
        display: flex;
        width: 50px;
        height: 46px;
        border-radius: 10px;
        background-color: var(--darkZaori);
        align-items: center;
        justify-content: center;
    }
`;