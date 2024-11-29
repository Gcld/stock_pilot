import React, { ChangeEvent, useEffect, useState } from 'react';
import { ModalOverlay, ModalContent, Select, Button, ButtonGroup, Title, InputGroup, Label, QuantityControl, PlusMinusButton, QuantityDisplay, Input } from './styled';
import { IoClose } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface EditMovementModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (movement: string, quantity: number) => void;
    movementType: (value: string) => void;
    getQuantity: (value: any | unknown) => void;
}

const EditMovementModal: React.FC<EditMovementModalProps> = ({ isOpen, onClose, onConfirm, movementType, getQuantity }) => {
    const [movement, setMovement] = useState('');
    const [quantity, setQuantity] = useState(0);

    const handleConfirm = () => {
        if (!movement) {
            toast.error('Por favor, selecione um tipo de movimento', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        if (quantity <= 0) {
            toast.error('A quantidade deve ser maior que zero', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        onConfirm(movement, quantity);
        onClose();
    };

    const handleQuantityChange = (value: string | number) => {
        if (typeof value === 'string') {
            const sanitizedValue = value.replace(/[^0-9]/g, '');
            const numericValue = parseInt(sanitizedValue, 10);

            if (isNaN(numericValue) || numericValue < 0) {
                toast.error('Por favor, insira um valor numérico válido', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                return;
            }

            setQuantity(numericValue);
        } else {
            setQuantity(Math.max(0, value));
        }
    };

    const handleIncrement = () => handleQuantityChange(quantity + 1);
    const handleDecrement = () => handleQuantityChange(quantity - 1);

    const handleMovementType = (e: ChangeEvent<HTMLSelectElement>) => {
        setMovement(e.target.value);
        movementType(e.target.value);
    }

    useEffect(() => {
        getQuantity({quantity, reason: movement});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[quantity, movement]);

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Title>
                    Edit Movement
                    <IoClose onClick={onClose} size={24} />
                </Title>
                <InputGroup>
                    <Label>Movement Type</Label>
                    <Select value={movement} onChange={handleMovementType}>
                        <option value="">Select movement type</option>
                        <option value="Return">Return</option>
                        <option value="Sell">Sell</option>
                        <option value="Discard">Discard</option>
                        <option value="Add">Add</option>
                    </Select>
                </InputGroup>
                <InputGroup>
                    <Label>Quantity</Label>
                    <QuantityControl>
                        <PlusMinusButton onClick={handleDecrement}>
                            <FaMinus color='var(--buttonIconColor)' />
                        </PlusMinusButton>
                        <input 
                            type="text" 
                            value={quantity} 
                            onChange={(e) => handleQuantityChange(e.target.value)}
                            style={{
                                width: '100px', 
                                textAlign: 'center', 
                                backgroundColor: 'transparent', 
                                border: 'none', 
                                color: 'var(--primaryLightZaori)',
                                fontSize: '32px',
                                fontFamily: 'var(--font-poppins)'
                            }}
                        />
                        <PlusMinusButton onClick={handleIncrement}>
                            <FaPlus color='var(--buttonIconColor)' />
                        </PlusMinusButton>
                    </QuantityControl>
                </InputGroup>
                <ButtonGroup>
                    <Button onClick={onClose} $secondary>Cancel</Button>
                    <Button onClick={handleConfirm}>Confirm</Button>
                </ButtonGroup>           
            </ModalContent>
        </ModalOverlay>
    );
};

export default EditMovementModal;