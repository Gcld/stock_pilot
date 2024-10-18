import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 28px;
`;

export const ButtonsSettings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`;

export const ButtonHeader = styled.div`
    display: flex;
    width: 50px;
    height: 46px;
    border-radius: 10px;
    background-color: var(--darkZaori);
    align-items: center;
    justify-content: center;
`;

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 100px;
`;

export const ProfilePicture = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 100px;
    overflow: hidden;
`;