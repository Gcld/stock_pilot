import styled from "styled-components";

export const Container = styled.div`
    height: 695px;
    width: 327px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #161616;
    padding-bottom: 80px;

    @media (max-width: 1100px) {
        display: none;
    }
`;