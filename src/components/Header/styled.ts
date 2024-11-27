import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100px;
    flex-direction: row;
    background-color: black;
    padding: 20px;
    justify-content: space-between;

    .mobileMenu{
        display: none;
    }

    @media (max-width: 780px) {
        .mobileMenu{
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primaryDarkZaori)
        }
    }
`;
