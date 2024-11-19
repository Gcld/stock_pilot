import { useMain } from "@/context/main";
import Filters from "../Filters";
import ItemsHistoryContainerGrid from "../ItemsHistoryContainerGrid";
import { Container } from "./styled";
import ItemsHistoryContainer from "../ItemsHistoryContainer";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { HistoryItem } from "@/Interfaces/interface";


export default function ContentHistory() {
    const { isGridView, setLoading } = useMain();
    const [movements, setMovements] = useState<HistoryItem[]>([]);


    const getHistory = async () => {
        try {
            const response = await api.get('/movements');
            setMovements(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Container>
            <Filters/>
            {isGridView === 'grid' 
                ? <ItemsHistoryContainerGrid data={movements}/> 
                : <ItemsHistoryContainer data={movements}/>
            }
        </Container>
    );
}
