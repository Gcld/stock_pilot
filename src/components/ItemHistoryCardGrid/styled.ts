import styled from "styled-components";

export const Container = styled.div<{ $isEntrada: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    padding: 15px;
    background-color: ${props => props.$isEntrada ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
    border: 2px solid ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const ItemPicture = styled.div`
    width: 100%;
    height: 40%;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 30%;

    h1 {
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
        text-align: center;
        word-break: break-word;
        margin: 0;
    }
`;

export const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%; 
    text-align: center;

    > h2 {
        font-family: var(--font-poppins);
        font-size: 10px;
        font-weight: regular;
        color: var(--primaryDarkZaori);
        margin: 0;
    }
`;

export const ItemPriceAndButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    width: 100%;
    height: 30%;

    h2 {
        font-family: var(--font-poppins);
        font-size: 12px;
        font-weight: 400;
        color: var(--primaryDarkZaori);
        text-align: center;
        margin: 0;
    }
`;

export const MovementType = styled.div<{ $isEntrada: boolean }>`
    padding: 2px 5px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 10px;
    color: white;
    background-color: ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
`;