import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
`;

export const TotalProducts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    padding: 0px 5px 0px 5px;
    border-radius: 15px;
    border: 1.5px solid var(--darkZaori);
    white-space: nowrap;

    h2{
        font-size: 18px;
        font-family: var(--font-poppins);
        font-weight: bold;
        color: white;
    }

    h3{
        font-size: 15px;
        font-family: var(--font-poppins);
        font-weight: 300;
        color: #6B6A67;
    }
`;