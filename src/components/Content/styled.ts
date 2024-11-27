import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 10px;
    align-content: center;
    justify-content: center;

    .mobileGrid{
        display: none;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        width: 100%;

        .mobileGrid{
            display: flex;
        }
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const Button = styled.div`
    display: flex;
    background-color: var(--darkZaori);
    border-radius: 10px;
    padding: 10px;
    font-family: var(--font-poppins);
    font-size: 12px;
    cursor: pointer;
    align-items: center;
    gap: 5px;
    color: var(--primaryLightZaori);
`;

export const MobileMenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
    z-index: 1000;
    overflow-y: auto;

    ${Button} {
        margin-bottom: 20px;
    }

    > div {
        display: flex !important;
        width: 90%;
        max-width: 400px;
    }
`;