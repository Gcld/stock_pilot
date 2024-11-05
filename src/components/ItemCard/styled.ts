import styled from "styled-components";

export const Container = styled.div`
    height: 98px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: var(--darkZaori);
    border-radius: 10px;
    padding: 8px;
`;

export const ItemPicture = styled.div`
    width: 105px;
    height: 82px;
    background-color: white;
    border-radius: 5px;
`;

export const ItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-right: 20px;
    border-right: 1px solid var(--buttonIconColor);

    h1{
        font-family: var(--font-poppins);
        font-size: 24px;
        font-weight: 400;
        color: white;
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3px;

    h2{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: #8D8D8D;
    }

    .inStock{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: white;
    }
`;

export const DotsButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 100%;
    
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const DropdownMenu = styled.div`
    position: absolute;
    right: 0;
    top: 100%;
    background-color: var(--darkZaori);
    border: 1px solid var(--buttonIconColor);
    border-radius: 10px;
    min-width: 180px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-top: 5px;
`;

interface DropdownItemProps {
    $isDelete?: boolean;
}

export const DropdownItem = styled.div<DropdownItemProps>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    cursor: pointer;
    color: ${props => props.$isDelete ? '#ff4444' : 'var(--primaryLightZaori)'};
    transition: background-color 0.3s ease;
    font-family: var(--font-poppins);
    font-size: 16px;

    &:first-child {
        border-radius: 10px 10px 0 0;
    }

    &:last-child {
        border-radius: 0 0 10px 10px;
    }

    &:hover {
        background-color: ${props => props.$isDelete ? 'rgba(255, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
    }

    svg {
        color: ${props => props.$isDelete ? '#ff4444' : 'var(--primaryLightZaori)'};
    }
`;
export const ItemPriceAndButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding-left: 30px;
    position: relative;

    h1 {
        font-family: var(--font-poppins);
        font-size: 32px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }
`;