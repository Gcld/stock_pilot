import { LuBox, LuHistory } from "react-icons/lu";
import { Container } from "./styled";
import { useState } from "react";
import { useMain } from "@/context/main";


export default function ButtonsMiddle() {

    const {setTabGeneral} = useMain();
    const [isListView, setIsListView] = useState(true);

    const toggleView = (tab: number) => {
        setIsListView(!isListView);
        setTabGeneral(tab);
    };

    return (
        <Container>
            <div className={isListView ? "buttonsMiddleClicked" : "buttonsMiddle"} onClick={() => toggleView(0)}>
                <LuBox size={20} color="var(--primaryDarkZaori)"/>
                <h3>Inventory</h3>
            </div>
            <div className={!isListView ? "buttonsMiddleClicked" : "buttonsMiddle"} onClick={() => toggleView(1)}>
                <LuHistory size={20} color="var(--primaryDarkZaori)"/>
                <h3>History</h3>
            </div>    
        </Container>
    );
}