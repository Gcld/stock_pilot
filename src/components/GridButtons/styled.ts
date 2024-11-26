import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1px;
    background-color: var(--darkZaori);
    border-radius: 10px;

    @media (max-width: 1100px) {
        display: none;
    }

    .buttonsClicked, .buttons {
        display: flex;
        width: 50px;
        height: 46px;
        border-radius: 10px;
        background-color: var(--darkZaori);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .buttonsClicked {
        border: 1px solid var(--primaryDarkZaori);
    }

    .buttons:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;