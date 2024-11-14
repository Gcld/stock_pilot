import styled from "styled-components";

export const Container = styled.div<{ $isEntrada: boolean }>`
    height: 98px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 8px;
    background-color: ${props => props.$isEntrada ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
    border: 2px solid ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
`;

export const ItemPicture = styled.div`
    width: 25%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
`;

export const ItemInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-right: 20px;
    border-right: 1px solid var(--buttonIconColor);

    > h1{
        padding-left: 20px;
        font-family: var(--font-poppins);
        font-size: 24px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: left;
    gap: 3px;
    padding-left: 10px;

    h2{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: var(--primaryDarkZaori);
    }

    .inStock{
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: var(--primaryDarkZaori);
    }
`;

export const ItemPriceAndButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;

    h2 {
        font-family: var(--font-poppins);
        font-size: 14px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
    }
`;

export const MovementType = styled.div<{ $isEntrada: boolean }>`
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
`;