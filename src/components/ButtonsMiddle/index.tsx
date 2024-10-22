import { LuBox, LuHistory } from "react-icons/lu";
import { Container } from "./styled";
import { useState } from "react";

export default function ButtonsMiddle() {

    const [isListView, setIsListView] = useState(true);

    const toggleView = () => {
        setIsListView(!isListView);
    };

    return (
        <Container>
            <div className={isListView ? "buttonsMiddleClicked" : "buttonsMiddle"} onClick={toggleView}>
                <LuBox size={20} color="var(--primaryDarkZaori)"/>
                <h3>Inventory</h3>
            </div>
            <div className={!isListView ? "buttonsMiddleClicked" : "buttonsMiddle"} onClick={() => setIsListView(false)}>
                <LuHistory size={20} color="var(--primaryDarkZaori)"/>
                <h3>History</h3>
            </div>    
        </Container>
    );
}