import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 10px;
    align-content: center;
    justify-content: center;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;

        > div {
            width: 100%; 
        }
    }
`;