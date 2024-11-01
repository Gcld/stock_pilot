import { GrPowerReset } from "react-icons/gr";
import { Container } from "./styled";
import { useMain } from "@/context/main";

export default function ResetFilter() {
    const { setSelectedCategory, setAlphabeticalOrder, setQuantityOrder, setPriceRange } = useMain();

    const handleReset = () => {
        setSelectedCategory(0);
        setAlphabeticalOrder(null);
        setQuantityOrder(null);
        setPriceRange({ min: null, max: null });
    };

    return (
        <Container onClick={handleReset}>
            <div className="content">
                <GrPowerReset size={24}/>
                <h2>Reset Filters</h2>
            </div>
        </Container>
    );
}