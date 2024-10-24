import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding: 30px 15px 30px 15px;
    border: 1px solid var(--darkZaori);

    h2{
        display: flex;
        align-content: center;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }
`;