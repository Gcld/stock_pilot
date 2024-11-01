import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 10px;
    padding: 18px;
    background-color: var(--darkZaori);
    border-radius: 10px;
    height: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 16px;
    width: 100%;
    max-width: 400px;

    h3{
        font-family: var(--font-poppins);
        font-size: 14px;
        font-weight: 400;
        color: var(--primaryLightZaori);
    }
`;

export const Input = styled.input`
    height: 40px;
    width: 100%;
    padding: 5px 15px;
    border: 1px solid var(--grayZaori);
    border-radius: 20px;
    background-color: transparent;
    color: var(--foreground);
    font-family: var(--font-poppins);
`;

export const TextArea = styled.textarea`
    height: 100px;
    width: 100%;
    padding: 5px 15px;
    border: 1px solid var(--grayZaori);
    border-radius: 20px;
    background-color: transparent;
    color: var(--foreground);
    font-family: var(--font-poppins);
    resize: vertical;
`;

export const Select = styled.select`
    height: 40px;
    width: 100%;
    padding: 5px 15px 5px 15px;
    border: 1px solid var(--grayZaori);
    border-radius: 20px;
    background-color: var(--darkZaori);
    color: #FDF9E745;
    font-family: var(--font-poppins);
    appearance: none; 
    background-image: url('data:image/svg+xml;utf8,<svg fill="%23FDF9E7" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center; 
    background-size: 20px;

    &:focus {
        outline: none;
        border-color: var(--primaryDarkZaori);
    }

    option {
        background-color: var(--darkZaori);
        color: var(--primaryLightZaori);
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: var(--darkZaori);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primaryDarkZaori);
        border-radius: 20px;
        border: 3px solid var(--darkZaori);
    }
`;

export const SubmitButton = styled.button`
    height: 40px;
    width: 100%;
    background-color: var(--primaryDarkZaori);
    color: var(--darkZaori);
    border: none;
    border-radius: 10px;
    font-family: var(--font-poppins);
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--primaryLightZaori);
    }
`;