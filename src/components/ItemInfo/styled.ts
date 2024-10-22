import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    padding: 30px;
    justify-content: space-between;

    h3{
        font-family: var(--font-poppins);
        font-size: 20px;
        font-weight: 400;
        color: var(--buttonIconColor);
    }
`;