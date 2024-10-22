import React, { useState } from 'react';
import { MdFormatListBulleted } from "react-icons/md";
import { Container } from "./styled";
import { IoGrid } from "react-icons/io5";

export default function ProductButtons() {
    const [isListView, setIsListView] = useState(true);

    const toggleView = () => {
        setIsListView(!isListView);
    };

    return (
        <Container>
            <div className={isListView ? "buttonsClicked" : "buttons"} onClick={toggleView}>
                <MdFormatListBulleted size={33} color={isListView ? "var(--primaryDarkZaori)" : "var(--primaryLightZaori)"}/>
            </div>
            <div 
                className={!isListView ? "buttonsClicked" : "buttons"}
                onClick={() => setIsListView(false)}
            >
                <IoGrid size={33} color={!isListView ? "var(--primaryDarkZaori)" : "var(--primaryLightZaori)"}/>
            </div>
        </Container>
    );
}