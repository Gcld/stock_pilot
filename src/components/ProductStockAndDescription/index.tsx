import React, { useEffect, useState } from 'react';
import { Container, Description, Separator, AdjustStockButton, Overlay, OverlayContent, AdjustmentBox, Select, AdjustmentButtonsDiv, ButtonsDiv, PlusOrMinusButton, ButtonsMovementDiv } from "./styled";
import ItemHistoryCard from '../ItemHistoryCard';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Category, Product } from '@/Interfaces/interface';
import { api } from '@/service/api';
import EditMovementModal from '../EditMovementModal';

interface Props {
    data: Product
}

export default function ProductStockAndDescription({data}: Props) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<number>(0);
    const [price, setPrice] = useState("");
    const [isMovementModalOpen, setIsMovementModalOpen] = useState(false);

    const openOverlay = () => setIsOverlayOpen(true);
    const closeOverlay = () => setIsOverlayOpen(false);

    const getCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleMovementConfirm = (movement: string, quantity: number) => {
        console.log(`Movement: ${movement}, Quantity: ${quantity}`);
        // Implementar a lógica para atualizar o movimento do produto
    };

    const updateProduct = async () => {
        try {
            await api.put(`/products/${data.id}`, {
                name: name,
                description: description,
                price: price,
                category: category
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setName(data.name);
        setDescription(data.description);
        setCategory(data.category?.id || 0);
        setPrice(data.price);
        getCategories();
    }, [data]);

    useEffect(() => {
        if (data.category?.id) {
            const findCategoryName = categories.find((cat) => cat.id === data.category?.id);
            console.log("FIND CATEGORY NAME", findCategoryName);
        }
    }, [categories, data.category?.id]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryId = parseInt(e.target.value);
        setCategory(selectedCategoryId);
    }

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
                        <ItemHistoryCard data={data}/>
                        <AdjustmentBox>
                            <h2>Name</h2>
                            <input value={name} onChange={(e) => setName(e.target.value)}/>
                        </AdjustmentBox>
                        <AdjustmentBox>
                            <h2>Description</h2> 
                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </AdjustmentBox>
                        <AdjustmentBox>
                            <h2>Category</h2>
                            <Select 
                                value={category} 
                                onChange={handleCategoryChange}
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
                                <PlusOrMinusButton>
                                    <FaMinus color='var(--buttonIconColor)'/>
                                </PlusOrMinusButton>
                                <h2>${price}</h2>
                                <PlusOrMinusButton>
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
                        <button onClick={() => {
                            updateProduct();
                            closeOverlay();
                        }}>Confirm</button>
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
