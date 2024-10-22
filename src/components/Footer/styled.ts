import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70px;
    background-color: var(--darkZaori);
    align-items: center;
    justify-content: center;
    p{
        color: white;
        font-family: var(--font-poppins);
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
    }
`;