import styled from "styled-components";

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