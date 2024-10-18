import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 8px;
    border: 1.5px solid var(--darkZaori);
    padding: 9px 0px 9px 8px;
    border-radius: 20px;

    h2{
        font-family: var(--font-poppins);
        font-size: 14px;
        color: var(--darkZaori);
    }
`;