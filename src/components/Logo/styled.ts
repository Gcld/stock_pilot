import styled, { keyframes } from "styled-components";
import { Caveat } from 'next/font/google'

const caveat = Caveat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700']
})

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const LogoDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 10px;

    &:hover {
        background-color: rgba(252, 205, 18, 0.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        svg {
            animation: ${rotate} 0.5s ease-in-out;
            color: var(--primaryLightZaori) !important;
        }

        h2 {
            animation: ${pulse} 0.5s ease-in-out;
            color: var(--primaryDarkZaori);
        }
    }

    > h2 {
        color: var(--primaryLightZaori);
        font-family: ${caveat.style.fontFamily};
        font-size: 32px;
        font-weight: 700;
        transition: all 0.3s ease;
    }

    svg {
        transition: all 0.3s ease;
    }

    @media (max-width: 578px) {
        width: 100%;
        > h2 {
            display: none;
        }
    }
`;