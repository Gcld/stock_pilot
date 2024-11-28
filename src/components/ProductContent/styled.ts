import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    padding-left: 30px;
    padding-right: 30px;

    @media (max-width: 873px) {
        flex-direction: column;
        align-items: center;
    }
`;