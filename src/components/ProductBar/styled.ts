import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 20px;
    padding: 33px;
    padding-top: 130px;

    @media (max-width: 578px) {
        flex-direction: column;
    }
`;