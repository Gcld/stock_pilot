import React from 'react';
import { MdFormatListBulleted } from "react-icons/md";
import { Container } from "./styled";
import { IoGrid } from "react-icons/io5";
import { useMain } from '@/context/main';

export default function GridButtons() {
    const { isGridView, setIsGridView } = useMain();

    return (
        <Container>
            <div 
                className={!isGridView ? "buttonsClicked" : "buttons"} 
                onClick={() => setIsGridView(false)}
            >
                <MdFormatListBulleted 
                    size={33} 
                    color={!isGridView ? "var(--primaryDarkZaori)" : "var(--primaryLightZaori)"}
                />
            </div>
            <div 
                className={isGridView ? "buttonsClicked" : "buttons"}
                onClick={() => setIsGridView(true)}
            >
                <IoGrid 
                    size={33} 
                    color={isGridView ? "var(--primaryDarkZaori)" : "var(--primaryLightZaori)"}
                />
            </div>
        </Container>
    );
}