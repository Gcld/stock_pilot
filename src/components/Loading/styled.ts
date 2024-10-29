import styled, { keyframes } from "styled-components";

export const rotate = () => {
    return keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    .loading {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid #fff;
        border-top-color: var(--primaryDarkZaori);
        animation: ${rotate} .5s linear infinite;
        
    }
`;