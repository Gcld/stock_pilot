import React, { useEffect, useState } from "react";
import { MdCategory } from "react-icons/md";
import { Container, FilterDropdown, DropdownContent, DropdownOption } from "./styled";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuArrowDownAZ } from "react-icons/lu";
import { GoNumber } from "react-icons/go";
import { Category } from "@/Interfaces/interface";
import { api } from "@/service/api";
import { useMain } from "@/context/main";

export default function ProductFilters() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const { setSelectedCategory } = useMain();

    const alphabetical = ['A to Z', 'Z to A'];
    const quantity = ['Highest to Lowest', 'Lowest to Highest'];

    const handleDropdownClick = (dropdown: string) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };

    const getCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCategorySelect = (categoryId: number) => {
        setSelectedCategory(categoryId);
        setOpenDropdown(null);
    }

    useEffect(() => {
        getCategories();
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
                        <DropdownOption onClick={() => handleCategorySelect(0)}>All Categories</DropdownOption>
                        {categories.map((category) => (
                            <DropdownOption key={category.id} onClick={() => handleCategorySelect(category.id)}>
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
                        {alphabetical.map((option: string) => (
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
                        {quantity.map((option: string) => (
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