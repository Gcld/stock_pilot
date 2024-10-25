import { BsThreeDots } from "react-icons/bs";
import { Container, ItemDescription, ItemInfo, ItemPicture, ItemPriceAndButton, DotsButton, DropdownMenu, DropdownItem } from "./styled";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

export default function ItemCard() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDotsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownItemClick = (e: React.MouseEvent, action: string) => {
        e.preventDefault(); 
        console.log(`Action clicked: ${action}`);
        setIsDropdownOpen(false);
    };

    return (
        <Link href={`/product/1`} passHref>
            <Container>
                <ItemPicture/>
                <ItemInfo>
                    <h1>Product Name</h1>
                    <ItemDescription>
                        <h2>Category • Stocked Product: </h2>
                        <h2 className="inStock">x in stock</h2>
                    </ItemDescription>
                </ItemInfo>
                <ItemPriceAndButton>
                    <h1>$100.00</h1>
                    <div ref={dropdownRef} style={{ position: 'relative' }}>
                        <DotsButton onClick={handleDotsClick}>
                            <BsThreeDots size={48}/>
                        </DotsButton>
                        {isDropdownOpen && (
                            <DropdownMenu>
                                <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'edit')}>
                                    <MdEdit size={20}/>
                                    Edit
                                </DropdownItem>
                                <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'share')}>
                                    <FaExchangeAlt size={20}/>
                                    Movement
                                </DropdownItem>
                                <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'delete')} $isDelete>
                                    <MdDelete size={20}/>
                                    Delete
                                </DropdownItem>
                            </DropdownMenu>
                        )}
                    </div>
                </ItemPriceAndButton>
            </Container>
        </Link>
    );
}