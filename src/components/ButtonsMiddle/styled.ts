import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const Button = styled.div<{ $isActive: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 100px;
    padding: 15px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    ${({ $isActive }) => $isActive ? `
        background-color: var(--darkZaori);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ` : `
        border: 2px solid var(--darkZaori);
    `}

    h3 {
        font-family: var(--font-poppins);
        font-weight: 400;
        font-size: 16px;
        color: ${({ $isActive }) => $isActive ? 'var(--primaryLightZaori)' : 'var(--primaryDarkZaori)'};
        transition: all 0.3s ease;
    }

    svg {
        transition: all 0.3s ease;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to right,
            transparent,
            rgba(252, 205, 18, 0.2),
            transparent
        );
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

        &::before {
            left: 100%;
        }

        h3 {
            color: var(--primaryDarkZaori);
        }

        svg {
            transform: scale(1.1) rotate(10deg);
        }
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;