import styled from "styled-components";

export const Container = styled.div<{ $isEntrada: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 15px;
    background-color: ${props => props.$isEntrada ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
    border: 2px solid ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const ItemPicture = styled.div`
    width: 100%;
    height: 120px;
    overflow: hidden;
    border-radius: 5px;
`;

export const ProductName = styled.h1`
    font-family: var(--font-poppins);
    font-size: 18px;
    font-weight: 500;
    color: var(--primaryDarkZaori);
    text-align: center;
    word-break: break-word;
    margin: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const MovementInfo = styled.p`
    font-family: var(--font-poppins);
    font-size: 12px;
    color: var(--primaryDarkZaori);
    margin: 0;
    text-align: center;
`;

export const MovementType = styled.div<{ $isEntrada: boolean }>`
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    background-color: ${props => props.$isEntrada ? 'var(--successColor)' : 'var(--errorColor)'};
    margin-top: 5px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const QuantityInfo = styled(MovementInfo)`
    font-size: 14px;
    font-weight: 500;
`;