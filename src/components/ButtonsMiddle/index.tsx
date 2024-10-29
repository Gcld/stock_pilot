import { LuBox, LuHistory } from "react-icons/lu";
import { Container } from "./styled";
import { useState } from "react";
import { useMain } from "@/context/main";

export default function ButtonsMiddle() {
    const {setTabGeneral} = useMain();
    const [activeTab, setActiveTab] = useState(0); 

    const handleTabChange = (tab: number) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
            setTabGeneral(tab);
        }
    };

    return (
        <Container>
            <div 
                className={activeTab === 0 ? "buttonsMiddleClicked" : "buttonsMiddle"} 
                onClick={() => handleTabChange(0)}
            >
                <LuBox size={20} color="var(--primaryDarkZaori)"/>
                <h3>Inventory</h3>
            </div>
            <div 
                className={activeTab === 1 ? "buttonsMiddleClicked" : "buttonsMiddle"} 
                onClick={() => handleTabChange(1)}
            >
                <LuHistory size={20} color="var(--primaryDarkZaori)"/>
                <h3>History</h3>
            </div>    
        </Container>
    );
}