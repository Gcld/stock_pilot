import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: space-evenly;
    background-color: #161616;
    padding-bottom: 80px;

    @media (max-width: 1100px) {
        display: none;
    }
`;