import { MdCategory } from "react-icons/md";
import { Container, FilterDropdown, DropdownContent, DropdownOption } from "./styled";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuArrowDownAZ } from "react-icons/lu";
import { GoNumber } from "react-icons/go";
import { useEffect, useState } from "react";
import { Category } from "@/Interfaces/interface";
import { api } from "@/service/api";

export default function ProductFilters() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    const handleDropdownClick = (dropdown: string) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };

    const getCategories = async () => {
        await api.get('/categories').then((response) => {
            console.log("CATEGORIES RESPONSE", response.data);
            setCategories(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    const alphabetical = ['A to Z', 'Z to A'];
    const quantity = ['Highest to Lowest', 'Lowest to Highest'];

    useEffect(() => {
        getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <h3>PRODUCT FILTERS</h3>
            <FilterDropdown>
                <div 
                    className="filterHeader"
                    onClick={() => handleDropdownClick('category')}
                >
                    <div className="filterTitle">
                        <MdCategory size={26} color="white"/>
                        <h2>Category</h2>
                    </div>
                    <IoMdArrowDropdown 
                        size={20} 
                        color="var(--buttonIconColor)"
                        style={{ 
                            transform: openDropdown === 'category' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }}
                    />
                </div>
                {openDropdown === 'category' && (
                    <DropdownContent>
                        {categories.map((category) => (
                            <DropdownOption key={category.id}>
                            {category.name}
                            </DropdownOption>
                        ))}
                    </DropdownContent>
                )}
            </FilterDropdown>

            <FilterDropdown>
                <div 
                    className="filterHeader"
                    onClick={() => handleDropdownClick('alphabetical')}
                >
                    <div className="filterTitle">
                        <LuArrowDownAZ size={26} color="white"/>
                        <h2>Alphabetical</h2>
                    </div>
                    <IoMdArrowDropdown 
                        size={20} 
                        color="var(--buttonIconColor)"
                        style={{ 
                            transform: openDropdown === 'alphabetical' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }}
                    />
                </div>
                {openDropdown === 'alphabetical' && (
                    <DropdownContent>
                        {alphabetical.map((option) => (
                            <DropdownOption key={option}>
                                {option}
                            </DropdownOption>
                        ))}
                    </DropdownContent>
                )}
            </FilterDropdown>

            <FilterDropdown>
                <div 
                    className="filterHeader"
                    onClick={() => handleDropdownClick('quantity')}
                >
                    <div className="filterTitle">
                        <GoNumber size={26} color="white"/>
                        <h2>Quantity</h2>
                    </div>
                    <IoMdArrowDropdown 
                        size={20} 
                        color="var(--buttonIconColor)"
                        style={{ 
                            transform: openDropdown === 'quantity' ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                        }}
                    />
                </div>
                {openDropdown === 'quantity' && (
                    <DropdownContent>
                        {quantity.map((option) => (
                            <DropdownOption key={option}>
                                {option}
                            </DropdownOption>
                        ))}
                    </DropdownContent>
                )}
            </FilterDropdown>
        </Container>
    );
}