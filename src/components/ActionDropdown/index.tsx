import React, { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { DotsButton, DropdownMenu, DropdownItem, SubDropdownMenu, DeleteConfirmation, DeleteButtons, ModalOverlay } from "./styled";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { IoReturnDownBack, IoAdd } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import EditModal from "../EditModal";

interface ActionDropdownProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onActionClick: (action: string, subAction?: string) => void;
}

export default function ActionDropdown({ isOpen, setIsOpen, onActionClick }: ActionDropdownProps) {
    const [showMovementMenu, setShowMovementMenu] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const updateDropdownPosition = () => {
        if (buttonRef.current && dropdownRef.current) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            let top = buttonRect.bottom + scrollTop;
            let left = buttonRect.left + scrollLeft;

            if (top + dropdownRect.height > window.innerHeight + scrollTop) {
                top = buttonRect.top + scrollTop - dropdownRect.height;
            }

            if (left + dropdownRect.width > window.innerWidth + scrollLeft) {
                left = buttonRect.right + scrollLeft - dropdownRect.width;
            }

            setDropdownPosition({ top, left });
        }
    };

    useEffect(() => {
        if (isOpen) {
            updateDropdownPosition();
            window.addEventListener('scroll', updateDropdownPosition);
            window.addEventListener('resize', updateDropdownPosition);

            const handleClickOutside = (event: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                    buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                window.removeEventListener('scroll', updateDropdownPosition);
                window.removeEventListener('resize', updateDropdownPosition);
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, setIsOpen]);

    const handleDotsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(updateDropdownPosition, 0);
        }
        setShowMovementMenu(false);
        setShowDeleteConfirmation(false);
        setShowEditModal(false);
    };

    const handleDropdownItemClick = (e: React.MouseEvent, action: string, subAction?: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (action === 'edit') {
            setShowEditModal(true);
            setIsOpen(false);
            return;
        }
        if (action === 'movement' && !subAction) {
            setShowMovementMenu(!showMovementMenu);
            setShowDeleteConfirmation(false);
            return;
        }
        if (action === 'delete' && !subAction) {
            setShowDeleteConfirmation(true);
            setShowMovementMenu(false);
            return;
        }
        if (action === 'delete' && subAction === 'cancel') {
            setShowDeleteConfirmation(false);
            return;
        }
        onActionClick(action, subAction);
        setIsOpen(false);
        setShowMovementMenu(false);
        setShowDeleteConfirmation(false);
    };

    const dropdownContent = isOpen && (
        <DropdownMenu
            ref={dropdownRef}
            style={{
                position: 'absolute',
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`
            }}
        >
            <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'edit')}>
                <MdEdit size={20} />
                Edit
            </DropdownItem>
            <DropdownItem
                onClick={(e) => handleDropdownItemClick(e, 'movement')}
                $hasSubmenu
            >
                <FaExchangeAlt size={20} />
                Movement
            </DropdownItem>
            {showMovementMenu && (
                <SubDropdownMenu>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'return')}>
                        <IoReturnDownBack size={20} />
                        Return
                    </DropdownItem>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'sell')}>
                        <RiMoneyDollarCircleFill size={20} />
                        Sell
                    </DropdownItem>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'discard')}>
                        <BiSolidDiscount size={20} />
                        Discard
                    </DropdownItem>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'add')}>
                        <IoAdd size={20} />
                        Add
                    </DropdownItem>
                </SubDropdownMenu>
            )}
            <DropdownItem
                onClick={(e) => handleDropdownItemClick(e, 'delete')}
                $isDelete
            >
                <MdDelete size={20} />
                Delete
            </DropdownItem>
            {showDeleteConfirmation && (
                <DeleteConfirmation>
                    <p>Do you wish to delete this product?</p>
                    <DeleteButtons>
                        <button
                            onClick={(e) => handleDropdownItemClick(e, 'delete', 'cancel')}
                            className="cancel"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={(e) => handleDropdownItemClick(e, 'delete', 'confirm')}
                            className="confirm"
                        >
                            Confirm
                        </button>
                    </DeleteButtons>
                </DeleteConfirmation>
            )}
        </DropdownMenu>
    );

    return (
        <>
            <div ref={buttonRef}>
                <DotsButton onClick={handleDotsClick}>
                    <BsThreeDots size={48} />
                </DotsButton>
            </div>
            {isOpen && ReactDOM.createPortal(
                dropdownContent,
                document.body
            )}
            {showEditModal && ReactDOM.createPortal(
                <ModalOverlay>
                    <EditModal onClose={() => setShowEditModal(false)} />
                </ModalOverlay>,
                document.body
            )}
        </>
    );
}