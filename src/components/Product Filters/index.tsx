import { MdCategory } from "react-icons/md";
import { Container } from "./styled";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuArrowDownAZ } from "react-icons/lu";
import { GoNumber } from "react-icons/go";

export default function ProductFilters() {
    return (
        <Container>
            <h3>PRODUCT FILTERS</h3>
            <div className="filterDropdown">
                <MdCategory size={26} color="white"/>
                <h2>Category</h2>
                <IoMdArrowDropdown size={20} color="var(--buttonIconColor)"/>
            </div>
            <div className="filterDropdown">
                <LuArrowDownAZ size={26} color="white"/>
                <h2>Alphabetical</h2>
                <IoMdArrowDropdown size={20} color="var(--buttonIconColor)"/>
            </div>
            <div className="filterDropdown">
                <GoNumber size={26} color="white"/>
                <h2>Quantity</h2>
                <IoMdArrowDropdown size={20} color="var(--buttonIconColor)"/>
            </div>
        </Container>
    );
}