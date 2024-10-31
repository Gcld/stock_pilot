import { Container } from "./styled";

interface HistoryItem {
    change: string;
    date: string;
}

interface ProductHistoryCardProps {
    data: HistoryItem;
}

export default function ProductHistoryCard({ data }: ProductHistoryCardProps) {
    return (
        <Container>
            <h2>{data.change}</h2>
            <h2>{data.date}</h2>
        </Container>
    );
}