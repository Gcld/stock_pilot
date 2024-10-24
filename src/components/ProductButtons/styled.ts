import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 62px;
    flex-direction: row;
    justify-content: left;
    padding-left: 30px;
`;

interface ButtonProps {
    $isActive: boolean;
    $isLeft?: boolean;
    $isRight?: boolean;
}

export const Button = styled.div<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    ${props => props.$isLeft && css`
        border-radius: 10px 0px 0px 10px;
    `}

    ${props => props.$isRight && css`
        border-radius: 0px 10px 10px 0px;
    `}

    ${props => props.$isActive
        ? css`
            border: 1px solid var(--primaryLightZaori);
            background-color: var(--darkZaori);

            h3 {
                color: var(--primaryDarkZaori);
            }
        `
        : css`
            border: 1px solid var(--buttonIconColor);

            h3 {
                color: var(--buttonIconColor);
            }
        `
    }

    h3 {
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 400;
        padding: 20px;
        transition: color 0.3s ease;
    }
`;