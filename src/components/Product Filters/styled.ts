import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 11px;
    border-radius: 10px;
    padding: 80px 9px 0px 9px;

    h3 {
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: 400;
        color: var(--buttonIconColor);
    }
`;

export const FilterDropdown = styled.div`
    width: 308px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #FFFFFF17;

    .filterHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 9px;
        cursor: pointer;
        transition: background-color 0.3s all ease;

        &:hover {
            background-color: #FFFFFF25;
            border-radius: 10px;
        }
    }

    .filterTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        flex: 1; 

        h2 {
            font-family: var(--font-poppins);
            font-weight: 400;
            font-size: 24px;
            color: white;
            flex: 1;
            text-align: center; 
            margin-right: 26px; 
        }
    }
`;

export const DropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF10;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
`;

export const DropdownOption = styled.div`
    padding: 12px 20px;
    font-family: var(--font-poppins);
    font-size: 16px;
    color: var(--primaryLightZaori);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--primaryDarkZaori);
        color: var(--darkZaori);
    }
`;