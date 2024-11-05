import { LuBox, LuHistory } from "react-icons/lu";
import { Container, Button } from "./styled";
import { useState } from "react";
import { useMain } from "@/context/main";

export default function ButtonsMiddle() {
    const { setTabGeneral } = useMain();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (tab: number) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
            setTabGeneral(tab);
        }
    };

    return (
        <Container>
            <Button 
                $isActive={activeTab === 0}
                onClick={() => handleTabChange(0)}
            >
                <LuBox size={20} color="var(--primaryDarkZaori)"/>
                <h3>Inventory</h3>
            </Button>
            <Button 
                $isActive={activeTab === 1}
                onClick={() => handleTabChange(1)}
            >
                <LuHistory size={20} color="var(--primaryDarkZaori)"/>
                <h3>History</h3>
            </Button>    
        </Container>
    );
}