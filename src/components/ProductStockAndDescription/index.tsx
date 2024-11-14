import React, { useState } from 'react';
import { Container, Description, Separator, AdjustStockButton, Overlay, OverlayContent, AdjustmentBox, Select, AdjustmentButtonsDiv, ButtonsDiv, PlusOrMinusButton, ButtonsMovementDiv } from "./styled";
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Product } from '@/Interfaces/interface';
import { api } from '@/service/api';
import EditMovementModal from '../EditMovementModal';
import { toast } from 'react-toastify';
import { useMain } from '@/context/main';

interface Props {
    data: Product;
    getProduct: (id: number) => Promise<void>;
}

export default function ProductStockAndDescription({data, getProduct}: Props) {
    const { categories } = useMain();
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isMovementModalOpen, setIsMovementModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: data.name,
        description: data.description,
        category: data.category.id.toString(),
        price: data.price,
        stock_quantity: data.stock_quantity.toString()
    });

    const openOverlay = () => setIsOverlayOpen(true);
    const closeOverlay = () => setIsOverlayOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePriceChange = (increment: boolean) => {
        setFormData(prev => ({
            ...prev,
            price: (parseFloat(prev.price) + (increment ? 1 : -1)).toFixed(2)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const newData = Object.entries(formData).reduce((acc, [key, value]) => {
            if (value !== '') {
                acc[key] = value;
            }
            return acc;
        }, {} as Record<string, string | number>);

        if (newData.stock_quantity) {
            newData.stock_quantity = Number(newData.stock_quantity);
        }

        try {
            const response = await api.patch(`/products/${data.id}/`, newData);
            console.log('Product updated:', response.data);
            toast.success('Product updated successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            closeOverlay();
            getProduct(data.id);
        } catch (error) {
            console.error('Error updating product:', error);
            toast.error('Failed to update product. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleMovementConfirm = (movement: string, quantity: number) => {
        console.log(`Movement: ${movement}, Quantity: ${quantity}`);
        // Implementar a lógica para atualizar o movimento do produto
    };

    return (
        <Container>
            <h1>Stock</h1>
            <div className="quantityAndDescription">
                <h3>QUANTITY AT HAND</h3>
                <h2>{data.stock_quantity}</h2>
                <AdjustStockButton onClick={openOverlay}>
                    <h2>Adjust Stock</h2> 
                </AdjustStockButton>
                <Separator />
                <Description>{data.description}</Description>
            </div>
            {isOverlayOpen && (
                <Overlay onClick={closeOverlay}>
                    <OverlayContent onClick={(e) => e.stopPropagation()}>
                        <h2>New Adjustment</h2>
                        <form onSubmit={handleSubmit}>
                            <AdjustmentBox>
                                <h2>Name</h2>
                                <input 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                />
                            </AdjustmentBox>
                            <AdjustmentBox>
                                <h2>Description</h2> 
                                <textarea 
                                    name="description" 
                                    value={formData.description} 
                                    onChange={handleChange}
                                ></textarea>
                            </AdjustmentBox>
                            <AdjustmentBox>
                                <h2>Category</h2>
                                <Select 
                                    name="category"
                                    value={formData.category} 
                                    onChange={handleChange}
                                >
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </Select>
                            </AdjustmentBox>
                            <AdjustmentButtonsDiv>
                                <AdjustmentBox>
                                    <h2>Price</h2>
                                    <ButtonsDiv>
                                        <PlusOrMinusButton onClick={() => handlePriceChange(false)}>
                                            <FaMinus color='var(--buttonIconColor)'/>
                                        </PlusOrMinusButton>
                                        <h2>${formData.price}</h2>
                                        <PlusOrMinusButton onClick={() => handlePriceChange(true)}>
                                            <FaPlus color='var(--buttonIconColor)'/>
                                        </PlusOrMinusButton>
                                    </ButtonsDiv>
                                </AdjustmentBox>
                                <AdjustmentBox>
                                    <h2>Movement</h2>
                                    <ButtonsMovementDiv onClick={() => setIsMovementModalOpen(true)}>
                                        <h2>Edit Movement</h2>
                                    </ButtonsMovementDiv>
                                </AdjustmentBox>
                            </AdjustmentButtonsDiv>
                            <button type="submit">Confirm</button>
                        </form>
                    </OverlayContent>
                </Overlay>
            )}
            <EditMovementModal
                isOpen={isMovementModalOpen}
                onClose={() => setIsMovementModalOpen(false)}
                onConfirm={handleMovementConfirm}
            />
        </Container>
    );
}