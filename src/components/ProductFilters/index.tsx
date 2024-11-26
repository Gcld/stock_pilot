import React, { useEffect, useState } from "react";
import { MdCategory } from "react-icons/md";
import { Container, FilterDropdown, DropdownContent, DropdownOption } from "./styled";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuArrowDownAZ } from "react-icons/lu";
import { GoNumber } from "react-icons/go";
import { api } from "@/service/api";
import { useMain } from "@/context/main";

export default function ProductFilters() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const {categories, setCategories} = useMain();
    
    const {
        setSelectedCategory,
        alphabeticalOrder,
        setAlphabeticalOrder,
        quantityOrder,
        setQuantityOrder
    } = useMain();

    const handleDropdownClick = (dropdown: string) => {
        if (openDropdown === dropdown) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdown);
        }
    };
    const getCategories = async () => {
        try {
            const response = await api.get('/categories/');
            console.log("CATEGORIA ",response.data);
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCategorySelect = (categoryId: number) => {
        setSelectedCategory(categoryId);
        setOpenDropdown(null);
    }

    const handleAlphabeticalSelect = (order: 'asc' | 'desc') => {
        setAlphabeticalOrder(order);
        setOpenDropdown(null);
    }

    const handleQuantitySelect = (order: 'asc' | 'desc') => {
        setQuantityOrder(order);
        setAlphabeticalOrder(null);  // Reset alphabetical order when changing quantity order
        setOpenDropdown(null);
    }

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
                        <MdCategory size={26} color="white" />
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
                        <LuArrowDownAZ size={26} color="white" />
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
                        <DropdownOption
                            onClick={() => handleAlphabeticalSelect('asc')}
                            className={alphabeticalOrder === 'asc' ? 'active' : ''}
                        >
                            A to Z
                        </DropdownOption>
                        <DropdownOption
                            onClick={() => handleAlphabeticalSelect('desc')}
                            className={alphabeticalOrder === 'desc' ? 'active' : ''}
                        >
                            Z to A
                        </DropdownOption>
                        {alphabeticalOrder && (
                            <DropdownOption onClick={() => setAlphabeticalOrder(null)}>
                                Clear Order
                            </DropdownOption>
                        )}
                    </DropdownContent>
                )}
            </FilterDropdown>

            <FilterDropdown>
                <div
                    className="filterHeader"
                    onClick={() => handleDropdownClick('quantity')}
                >
                    <div className="filterTitle">
                        <GoNumber size={26} color="white" />
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
                        <DropdownOption
                            onClick={() => handleQuantitySelect('desc')}
                            className={quantityOrder === 'desc' ? 'active' : ''}
                        >
                            Highest to Lowest
                        </DropdownOption>
                        <DropdownOption
                            onClick={() => handleQuantitySelect('asc')}
                            className={quantityOrder === 'asc' ? 'active' : ''}
                        >
                            Lowest to Highest
                        </DropdownOption>
                        {quantityOrder && (
                            <DropdownOption onClick={() => setQuantityOrder(null)}>
                                Clear Order
                            </DropdownOption>
                        )}
                    </DropdownContent>
                )}
            </FilterDropdown>
        </Container>
    );
}