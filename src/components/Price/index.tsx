import { MdCategory } from "react-icons/md";
import { Container } from "./styled";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Price() {
    return (
        <Container>
            <h3>PRICE</h3>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <h2>Minimum price</h2>
            </div>
            <div className="priceDropdown">
                <div className="priceBox">$</div>
                <h2>Maximum price</h2>
            </div>
        </Container>
    );
}