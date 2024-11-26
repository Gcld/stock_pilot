import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    position: relative;

    @media (max-width: 780px) {
        display: none;
    }
`;

export const Dropdown = styled.div<{ $isProfile?: boolean }>`
    position: absolute;
    top: 100%;
    right: ${props => props.$isProfile ? '0' : 'auto'};
    left: ${props => props.$isProfile ? 'auto' : '0'};
    background-color: var(--darkZaori);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    padding: 10px 0;
    z-index: 10;
    min-width: 200px;
    animation: ${fadeIn} 0.3s ease-in-out;
`;

export const DropdownItem = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--primaryLightZaori);
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: var(--primaryDarkZaori);
        color: var(--darkZaori);
    }

    svg {
        font-size: 18px;
    }
`;


export const ButtonsSettings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const ButtonHeader = styled.button`
    display: flex;
    width: 50px;
    height: 46px;
    border-radius: 10px;
    background-color: var(--darkZaori);
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        background-color: var(--primaryDarkZaori);
        animation: ${pulse} 0.5s ease-in-out;
    }

    &:focus {
        outline: 2px solid var(--primaryLightZaori);
    }

    svg {
        transition: all 0.3s ease;
    }

    &:hover svg {
        color: var(--darkZaori);
        transform: scale(1.1);
    }
`;

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1000;

    &:hover {
        background-color: var(--darkZaori);
        padding: 5px 10px;
    }

    svg {
        transition: all 0.3s ease;
    }

    &:hover svg {
        transform: rotate(180deg);
    }
`;

export const ProfilePicture = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 100px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 0 15px var(--primaryDarkZaori);
    }
`;

export const Tooltip = styled.span`
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    animation: ${fadeIn} 0.3s ease-in-out forwards;
`;