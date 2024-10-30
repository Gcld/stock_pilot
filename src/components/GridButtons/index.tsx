import { MdFormatListBulleted } from "react-icons/md";
import { Container } from "./styled";
import { IoGrid } from "react-icons/io5";
import { useMain } from '@/context/main';
import { useEffect } from 'react';

export default function GridButtons() {
    const { handleTabView, isGridView, getTabView } = useMain();

    useEffect(() => {
        getTabView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <div 
                className={isGridView === 'list' ? "buttonsClicked" : "buttons"} 
                onClick={() => handleTabView('list')}
            >
                <MdFormatListBulleted 
                    size={33} 
                    color={isGridView === 'list' ? "var(--primaryDarkZaori)" : "var(--primaryLightZaori)"}
                />
            </div>
            <div 
                className={isGridView === 'grid' ? "buttonsClicked" : "buttons"}
                onClick={() => handleTabView('grid')}
            >
                <IoGrid 
                    size={33} 
                    color={isGridView === 'grid' ? "var(--primaryDarkZaori)" : "var(--primaryLightZaori)"}
                />
            </div>
        </Container>
    );
}