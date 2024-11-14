import { useEffect, useState } from "react";
import ProductHistoryCard from "../ProductHistoryCard";
import ProductStockAndDescription from "../ProductStockAndDescription";
import { Container, HistoryCardDiv } from "./styled";
import { api } from "@/service/api";
import { Product } from "@/Interfaces/interface";

interface HistoryItem {
    change: string;
    date: string;
}

interface ProductHistoryProps {
    data: Product;
}

export default function ProductHistory({ data }: ProductHistoryProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await api.get<HistoryItem[]>(`/products/${data.id}/history`);
                setHistory(response.data);
            } catch (error) {
                console.error("Erro ao buscar o histórico do produto:", error);
            }
        };

        fetchHistory();
    }, [data.id]);

    return (
        <Container>
            <HistoryCardDiv>
                {/* {history.map((item, index) => (
                    <ProductHistoryCard key={index} data={item} />
                ))} */}
                <ProductHistoryCard data={{ change: '10%', date: '2023-08-01'}} />
            </HistoryCardDiv>
            <ProductStockAndDescription data={data} />
        </Container>
    );
}