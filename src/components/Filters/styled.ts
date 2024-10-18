import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 11px;
    width: 330px;
    height: 695px;
    background-color: #161616;
    border-radius: 10px;
    padding: 80px 9px 80px 9px;

    h3{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: 400;
        color: var(--buttonIconColor);
    }

    .filterDropdown{
        width: 308px;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        padding: 9px;
        background-color: #FFFFFF17;

        h2{
            font-family: var(--font-poppins);
            font-weight: 400;
            font-size: 24px;
            color: white;
        }
    }
`;