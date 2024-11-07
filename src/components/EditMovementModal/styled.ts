import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideIn = keyframes`
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
    background-color: var(--darkZaori);
    padding: 30px;
    border-radius: 15px;
    width: 400px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    animation: ${slideIn} 0.3s ease-out;
`;

export const Title = styled.h2`
    color: var(--primaryLightZaori);
    font-family: var(--font-poppins);
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primaryDarkZaori);
    }
    }
`;

export const InputGroup = styled.div`
    margin-bottom: 20px;
`; 

export const Label = styled.label`
    display: block;
    color: var(--primaryLightZaori);
    font-family: var(--font-poppins);
    font-size: 14px;
    margin-bottom: 5px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 12px;
    padding-right: 40px; 
    border-radius: 8px;
    background-color: var(--darkZaori);
    color: var(--primaryLightZaori);
    border: 1px solid var(--buttonIconColor);
    font-family: var(--font-poppins);
    font-size: 16px;
    transition: border-color 0.3s ease;
    appearance: none; 
    cursor: pointer;

    background-image: url("data:image/svg+xml;utf8,<svg fill='%23FCCD12' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 15px center;

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    option {
        background-color: var(--darkZaori);
        color: var(--primaryLightZaori);
        padding: 12px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--darkZaori);
    color: var(--primaryLightZaori);
    border: 1px solid var(--buttonIconColor);
    font-family: var(--font-poppins);
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
    outline: none;
    border-color: var(--primaryDarkZaori);
    }

    &::placeholder {
    color: var(--buttonIconColor);
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 30px;
`;

export const Button = styled.button<{ $secondary?: boolean }>`
    padding: 12px 20px;
    border-radius: 8px;
    font-family: var(--font-poppins);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    background-color: ${props => props.$secondary ? 'transparent' : 'var(--primaryDarkZaori)'};
    color: ${props => props.$secondary ? 'var(--primaryLightZaori)' : 'var(--darkZaori)'};
    border: ${props => props.$secondary ? '1px solid var(--buttonIconColor)' : 'none'};

    &:hover {
    background-color: ${props => props.$secondary ? 'rgba(255, 255, 255, 0.1)' : 'var(--primaryLightZaori)'};
    color: ${props => props.$secondary ? 'var(--primaryDarkZaori)' : 'var(--darkZaori)'};
    }
`;

export const QuantityControl = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 1.5px solid var(--buttonIconColor);
    border-radius: 20px;
    background-color: var(--darkZaori);
`;

export const PlusMinusButton = styled.div`
    height: 37px;
    width: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--buttonIconColor);
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
    background-color: var(--buttonIconColor);

    svg {
        color: var(--darkZaori) !important;
    }
    }
`;

export const QuantityDisplay = styled.h2`
    font-family: var(--font-poppins);
    font-size: 32px;
    font-weight: 400;
    color: var(--primaryLightZaori);
`;