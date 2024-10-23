import React, { useState } from 'react';
import { Button, Container } from "./styled";

export default function ProductButtons() {
    const [activeButton, setActiveButton] = useState('general');

    return (
        <Container>
            <Button 
                isActive={activeButton === 'general'}
                onClick={() => setActiveButton('general')}
                isLeft
            >
                <h3>General Information</h3>
            </Button>
            <Button 
                isActive={activeButton === 'history'}
                onClick={() => setActiveButton('history')}
                isRight
            >
                <h3>Product History</h3>
            </Button>
        </Container>
    );
}