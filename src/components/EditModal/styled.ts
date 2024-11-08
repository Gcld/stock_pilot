import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--darkZaori);
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    position: relative;
    z-index: 1001; 
    overflow: auto; 
    max-height: 90vh; 

    h2 {
        color: var(--primaryLightZaori);
        font-family: var(--font-poppins);
        font-size: 24px;
        margin-bottom: 1.5rem;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;

    label {
        display: block;
        color: var(--primaryLightZaori);
        margin-bottom: 0.5rem;
        font-family: var(--font-poppins);
        font-size: 14px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--buttonIconColor);
    border-radius: 5px;
    background-color: transparent;
    color: var(--primaryLightZaori);
    font-family: var(--font-poppins);
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    &::placeholder {
        color: var(--buttonIconColor);
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--buttonIconColor);
    border-radius: 5px;
    background-color: transparent;
    color: var(--primaryLightZaori);
    font-family: var(--font-poppins);
    min-height: 100px;
    resize: vertical;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    &::placeholder {
        color: var(--buttonIconColor);
    }
`;

export const Select = styled.select`
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--buttonIconColor);
    border-radius: 5px;
    background-color: transparent;
    color: var(--primaryLightZaori);
    font-family: var(--font-poppins);
    transition: border-color 0.3s ease;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    option {
        background-color: var(--darkZaori);
        color: var(--primaryLightZaori);
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;

    button {
        padding: 0.8rem 1.5rem;
        border-radius: 5px;
        font-family: var(--font-poppins);
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;

        &.cancel {
            background-color: transparent;
            border: 1px solid var(--buttonIconColor);
            color: var(--primaryLightZaori);

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }

        &.confirm {
            background-color: var(--primaryDarkZaori);
            border: none;
            color: var(--darkZaori);

            &:hover {
                opacity: 0.9;
            }
        }
    }
`;