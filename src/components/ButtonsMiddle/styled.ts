import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    .buttonsMiddleClicked{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: var(--darkZaori);
        gap: 10px;
        border-radius: 100px;
        stroke: 1px solid var(--primaryLightZaori);
        padding: 15px;
        h3{
            font-family: var(--font-poppins);
            font-size: 16px;
        }
    }

    .buttonsMiddle{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 100px;
        padding: 15px;
        border: 2px solid var(--darkZaori);
        h3{
            font-family: var(--font-poppins);
            font-size: 16px;
        }
    }
`;