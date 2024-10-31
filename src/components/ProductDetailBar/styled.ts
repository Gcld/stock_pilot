// src/components/ProductDetailBar/styled.ts

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-between;

    h1 {
        font-family: var(--font-poppins);
        font-size: 36px;
        font-weight: 600;
        color: var(--primaryLightZaori);
    }
`;

export const Separator = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 1px;
    background-color: var(--buttonIconColor);
    transition: all 0.3s ease;
    z-index: 0;
`;

export const GridButtons = styled.div`
    display: flex;
    flex-direction: row;
    background-color: var(--darkZaori);
    border-radius: 10px;
    border: 1px solid var(--buttonIconColor);
    position: relative;
    overflow: hidden;

    &:hover ${Separator} {
        background-color: var(--primaryDarkZaori);
    }
`;

export const ButtonEnd = styled.button`
    display: flex;
    width: 50px;
    height: 46px;
    border-radius: 10px;
    background-color: var(--darkZaori);
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    outline: inherit;
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;

    &:first-child {
        border-radius: 9px 0 0 9px;
    }

    &:last-child {
        border-radius: 0 9px 9px 0;
    }


    .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;

        svg {
            transition: all 0.3s ease;
            color: var(--buttonIconColor);
        }

        .tooltip {
            position: absolute;
            background-color: var(--primaryDarkZaori);
            color: var(--darkZaori);
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            font-family: var(--font-poppins);
            white-space: nowrap;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
            pointer-events: none;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primaryDarkZaori);
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:hover {
        .button-content {
            svg {
                color: var(--darkZaori);
                transform: scale(1.2);
            }

            .tooltip {
                opacity: 1;
                transform: translateY(-40px);
            }
        }

        &::before {
            opacity: 1;
        }
    }

    &:active {
        transform: scale(0.95);
    }
`;