import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 32px;
    gap: 20px;
    align-content: center;
    justify-content: space-around;

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
`;