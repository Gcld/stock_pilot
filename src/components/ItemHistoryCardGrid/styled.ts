import styled from "styled-components";

export const Container = styled.div<{ $isEntrada: boolean }>`
    display: flex;
    height: 50%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border-radius: 10px;
    padding: 40px;
    background-color: ${props => props.$isEntrada ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
    border: 2px solid ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
`;

export const ItemPicture = styled.div`
    width: 105px;  
    height: 82px;  
    overflow: hidden;
    border-radius: 5px;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;

    h1 {
        font-family: var(--font-poppins);
        font-size: 20px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
        white-space: nowrap;
        overflow: hidden;
        width: 100%; 
        text-align: center;
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%; 
    text-align: center;

    > h2 {
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: regular;
        color: var(--primaryDarkZaori);
    }
`;

export const ItemPriceAndButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;

    h2 {
        font-family: var(--font-poppins);
        font-size: 14px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
        text-align: center;
    }
`;

export const MovementType = styled.div<{ $isEntrada: boolean }>`
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
`;