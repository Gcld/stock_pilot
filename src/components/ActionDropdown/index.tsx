import { useRef, useEffect, useState } from "react";
import { DotsButton, DropdownMenu, DropdownItem, SubDropdownMenu } from "./styled";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { IoReturnDownBack, IoAdd } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

interface ActionDropdownProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onActionClick: (action: string, subAction?: string) => void;
}

export default function ActionDropdown({ isOpen, setIsOpen, onActionClick }: ActionDropdownProps) {
    const [showMovementMenu, setShowMovementMenu] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setShowMovementMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    const handleDotsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
        setShowMovementMenu(false);
    };

    const handleDropdownItemClick = (e: React.MouseEvent, action: string, subAction?: string) => {
        e.preventDefault();
        if (action === 'movement' && !subAction) {
            setShowMovementMenu(!showMovementMenu);
            return;
        }
        onActionClick(action, subAction);
        setIsOpen(false);
        setShowMovementMenu(false);
    };

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            <DotsButton onClick={handleDotsClick}>
                <BsThreeDots size={48}/>
            </DotsButton>
            {isOpen && (
                <DropdownMenu>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'edit')}>
                        <MdEdit size={20}/>
                        Edit
                    </DropdownItem>
                    <DropdownItem 
                        onClick={(e) => handleDropdownItemClick(e, 'movement')}
                        $hasSubmenu
                    >
                        <FaExchangeAlt size={20}/>
                        Movement
                    </DropdownItem>
                    {showMovementMenu && (
                        <SubDropdownMenu>
                            <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'return')}>
                                <IoReturnDownBack size={20}/>
                                Return
                            </DropdownItem>
                            <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'sell')}>
                                <RiMoneyDollarCircleFill size={20}/>
                                Sell
                            </DropdownItem>
                            <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'discard')}>
                                <BiSolidDiscount size={20}/>
                                Discard
                            </DropdownItem>
                            <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'add')}>
                                <IoAdd size={20}/>
                                Add
                            </DropdownItem>
                        </SubDropdownMenu>
                    )}
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'delete')} $isDelete>
                        <MdDelete size={20}/>
                        Delete
                    </DropdownItem>
                </DropdownMenu>
            )}
        </div>
    );
}