import { useMain } from "@/context/main";
import Filters from "../Filters";
import ItemsHistoryContainerGrid from "../ItemsHistoryContainerGrid";
import { Button, Container, MobileMenu } from "./styled";
import ItemsHistoryContainer from "../ItemsHistoryContainer";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { HistoryItem } from "@/Interfaces/interface";
import { LuListFilter, LuPlus } from "react-icons/lu";


export default function ContentHistory() {
    const { isGridView, setLoading } = useMain();
    const [movements, setMovements] = useState<HistoryItem[]>([]);


    const getHistory = async () => {
        try {
            const response = await api.get('/movements');
            setMovements(response.data.data);
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
            <MobileMenu>
                <Button>
                    <LuPlus size={20}/>
                    <h2>Add Product</h2>
                </Button>
                <Button>
                    <LuListFilter size={20}/>
                    <h2>Filter</h2>
                </Button>
            </MobileMenu>
            <Filters/>
            {isGridView === 'grid' 
                ? <ItemsHistoryContainerGrid data={movements}/> 
                : <ItemsHistoryContainer data={movements}/>
            }
            <div className="mobileGrid">
                <ItemsHistoryContainerGrid data={movements}/>
            </div>
        </Container>
    );
}
