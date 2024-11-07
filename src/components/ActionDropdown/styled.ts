import styled, { css } from "styled-components";

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
    background-color: var(--darkZaori);
    border: 1px solid var(--buttonIconColor);
    border-radius: 10px;
    min-width: 180px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const SubDropdownMenu = styled.div`
    background-color: var(--darkZaori);
    border-left: 1px solid var(--buttonIconColor);
    border-right: 1px solid var(--buttonIconColor);
    margin: -1px;
`;

interface DropdownItemProps {
    $isDelete?: boolean;
    $hasSubmenu?: boolean;
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
    position: relative;

    ${props => props.$hasSubmenu && css`
        &:after {
            content: '›';
            position: absolute;
            right: 16px;
            font-size: 20px;
            transition: transform 0.3s ease;
        }

        &:hover:after {
            transform: rotate(90deg);
        }
    `}

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

export const DeleteConfirmation = styled.div`
    padding: 16px;
    border-top: 1px solid var(--buttonIconColor);
    
    p {
        font-family: var(--font-poppins);
        font-size: 14px;
        color: var(--primaryLightZaori);
        margin-bottom: 12px;
        text-align: center;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const DeleteButtons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;

    button {
        flex: 1;
        padding: 8px;
        border-radius: 5px;
        font-family: var(--font-poppins);
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;

        &.cancel {
            background-color: transparent;
            border: 1px solid var(--buttonIconColor);
            color: var(--primaryLightZaori);

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }

        &.confirm {
            background-color: #ff4444;
            color: white;

            &:hover {
                background-color: #ff6666;
            }
        }
    }
`;