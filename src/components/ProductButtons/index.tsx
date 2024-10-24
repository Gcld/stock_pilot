import React, { useState } from 'react';
import { Button, Container } from "./styled";

interface ButtonProps {
    setTab: (tab: number) => void;
}



export default function ProductButtons({setTab}: ButtonProps) {
    const [activeButton, setActiveButton] = useState('general');


    const handleTabClick = (tab: number, active: string) => {
        setTab(tab);
        setActiveButton(active);
    }

    return (
        <Container>
            <Button 
                $isActive={activeButton === 'general'}
                onClick={() => handleTabClick(0, 'general')}
                $isLeft
            >
                <h3>General Information</h3>
            </Button>
            <Button 
                $isActive={activeButton === 'history'}
                onClick={() => handleTabClick(1, 'history')}
                $isRight
            >
                <h3>Product History</h3>
            </Button>
        </Container>
    );
}