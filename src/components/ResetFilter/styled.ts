import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 54px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(252, 205, 18, 0.2),
            transparent
        );
        transition: left 0.5s ease;
    }

    &:hover::before {
        left: 100%;
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--darkZaori);
        gap: 8px;
        position: relative;
        z-index: 1;
        transition: all 0.3s ease;

        svg {
            transition: transform 0.5s ease;
            path {
                stroke: var(--primaryLightZaori);
            }
        }

        h2 {
            font-family: var(--font-poppins);
            font-size: 24px;
            font-weight: regular;
            color: var(--primaryLightZaori);
            transition: color 0.3s ease;
        }
    }

    &:hover .content {
        background-color: #424242;

        svg {
            transform: rotate(180deg);
            path {
                stroke: var(--primaryDarkZaori);
            }
        }

        h2 {
            color: var(--primaryDarkZaori);
        }
    }

    &:active {
        transform: scale(0.98);
    }
`;