import React, { ChangeEvent, useEffect, useState } from 'react';
import { ModalOverlay, ModalContent, Select, Button, ButtonGroup, Title, InputGroup, Label, QuantityControl, PlusMinusButton, QuantityDisplay } from './styled';
import { IoClose } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';

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
        onConfirm(movement, quantity);
        onClose();
    };

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(0, prev - 1));

    const handleMovementType = (e: ChangeEvent<HTMLSelectElement>) => {
        setMovement(e.target.value);
        movementType(e.target.value);
    }

    useEffect(() => {
        getQuantity({quantity, reason: movement});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[quantity]);

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
                        <QuantityDisplay>{quantity}</QuantityDisplay>
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