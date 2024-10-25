import { useRef, useEffect } from "react";
import { DotsButton, DropdownMenu, DropdownItem } from "./styled";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

interface ActionDropdownProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onActionClick: (action: string) => void;
}

export default function ActionDropdown({ isOpen, setIsOpen, onActionClick }: ActionDropdownProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
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
    };

    const handleDropdownItemClick = (e: React.MouseEvent, action: string) => {
        e.preventDefault();
        onActionClick(action);
        setIsOpen(false);
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
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement')}>
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
    );
}