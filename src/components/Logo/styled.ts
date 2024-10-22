import styled from "styled-components";
import { Caveat } from 'next/font/google'

const caveat = Caveat({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700']
})

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    h2 {
        color: var(--primaryLightZaori);
        font-family: ${caveat.style.fontFamily};
        font-size: 32px;
        font-weight: 700;
    }
`;