import React, { useRef, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { DotsButton, DropdownMenu, DropdownItem, SubDropdownMenu, DeleteConfirmation, DeleteButtons, ModalOverlay, AddForm, AddInput, AddButton } from "./styled";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { IoReturnDownBack, IoAdd } from "react-icons/io5";
import { BiSolidDiscount } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import EditModal from "../EditModal";
import { api } from "@/service/api";
import { toast } from "react-toastify";

interface ActionDropdownProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    id: number;
    getProducts: () => Promise<void>;
}

export default function ActionDropdown({ isOpen, setIsOpen, id, getProducts}: ActionDropdownProps) {
    const [showMovementMenu, setShowMovementMenu] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showMovementForm, setShowMovementForm] = useState(false);
    const [currentMovementType, setCurrentMovementType] = useState('');
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        quantity: '',
        reason: '',
    });

    const handleMovementPost = async () => {
        try {
            const currentProductResponse = await api.get(`/products/${id}/`);
            const currentQuantity = currentProductResponse.data.stock_quantity;
            
            const quantityToChange = parseInt(formData.quantity);
            if (isNaN(quantityToChange) || quantityToChange <= 0) {
                throw new Error("Invalid quantity");
            }
            
            let newQuantity: number;
            if (currentMovementType === 'Add') {
                newQuantity = currentQuantity + quantityToChange;
            } else {
                if (quantityToChange > currentQuantity) {
                    throw new Error("Cannot subtract more than the current quantity");
                }
                newQuantity = currentQuantity - quantityToChange;
            }
            
            const response = await api.patch(`/products/${id}/`, { stock_quantity: newQuantity });
            const movementToRequest = currentMovementType == 'Add' ? 'IN' : 'OUT';
            await api.post(`/movements/`, 
                {
                "product": id,
                "movement_type": movementToRequest,
                "quantity" : quantityToChange,
                "reason": currentMovementType
        });
            toast.success(`Product quantity ${currentMovementType === 'Add' ? 'increased' : 'decreased'} successfully`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getProducts();
            setIsOpen(false);
            setShowMovementForm(false);
            setFormData({ quantity: '', reason: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to update product quantity. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handleMovementPostDelete = async (id: number, quantity: number) => {
        try {
            await api.post(`/movements/`, 
                {
                "product": id,
                "movement_type": 'OUT',
                "quantity" : quantity,
                "reason": 'Deleted'
        });
            toast.success(`Product quantity ${currentMovementType === 'Add' ? 'increased' : 'decreased'} successfully`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getProducts();
            setIsOpen(false);
            setShowMovementForm(false);
            setFormData({ quantity: '', reason: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to update product quantity. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

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
        setShowMovementForm(false);
    };

    const handleDeleteProduct = async () => {
        try{
            const currentProductResponse = await api.get(`/products/${id}/`);
            const currentQuantity = currentProductResponse.data.stock_quantity;
            const response = await api.delete(`/products/${id}/`);
            if(response.status === 204){
                handleMovementPostDelete(id, currentQuantity);
                toast.success('Product deleted successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                getProducts();
            }
        }
        catch(error){
            console.error('Error deleting product:', error);
            toast.error('Failed to delete product. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitMovement = async (e: React.FormEvent) => {
        e.preventDefault();
        handleMovementPost()
    };

    const handleDropdownItemClick = async (e: React.MouseEvent, action: string, reason?: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (action === 'edit') {
            setShowEditModal(true);
            setIsOpen(false);
            return;
        }
        if (action === 'movement' && !reason) {
            setShowMovementMenu(!showMovementMenu);
            setShowDeleteConfirmation(false);
            return;
        }
        if (action === 'delete' && !reason) {
            setShowDeleteConfirmation(true);
            setShowMovementMenu(false);
            return;
        }
        if (action === 'delete' && reason === 'cancel') {
            setShowDeleteConfirmation(false);
            return;
        }
        if (action === 'movement' && reason) {
            setCurrentMovementType(reason);
            setShowMovementForm(true);
            setShowMovementMenu(false);
            return;
        }
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
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'Return')}>
                        <IoReturnDownBack size={20} />
                        Return
                    </DropdownItem>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'Sell')}>
                        <RiMoneyDollarCircleFill size={20} />
                        Sell
                    </DropdownItem>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'Discard')}>
                        <BiSolidDiscount size={20} />
                        Discard
                    </DropdownItem>
                    <DropdownItem onClick={(e) => handleDropdownItemClick(e, 'movement', 'Add')}>
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
                            onClick={handleDeleteProduct}
                            className="confirm"
                        >
                            Confirm
                        </button>
                    </DeleteButtons>
                </DeleteConfirmation>
            )}
            {showMovementForm && (
                <AddForm onSubmit={handleSubmitMovement}>
                    <AddInput
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChangeQuantity}
                        placeholder={`Quantity to ${currentMovementType}`}
                    />
                    <AddButton type="submit">{currentMovementType}</AddButton>
                </AddForm>
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
                    <EditModal onClose={() => setShowEditModal(false)} id = {id} getProducts={getProducts}/>
                </ModalOverlay>,
                document.body
            )}
        </>
    );
}