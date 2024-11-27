import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100px;
    flex-direction: row;
    background-color: black;
    padding: 20px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    .mobileMenu {
        display: none;
    }

    @media (max-width: 780px) {
        .mobileMenu {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primaryDarkZaori);
            cursor: pointer;
            z-index: 1001;
        }
    }
`;

export const MobileMenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;

    > div {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
`;