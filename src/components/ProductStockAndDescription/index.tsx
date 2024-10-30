import React, { useState } from 'react';
import { Container, Description, Separator, AdjustStockButton, Overlay, OverlayContent, AdjustmentBox, Select, AdjustmentButtonsDiv, ButtonsDiv, PlusOrMinusButton, ButtonsMovementDiv } from "./styled";
import ItemHistoryCard from '../ItemHistoryCard';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Product } from '@/Interfaces/interface';

interface Props {
    data: Product
}

export default function ProductStockAndDescription({data}: Props) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const openOverlay = () => setIsOverlayOpen(true);
    const closeOverlay = () => setIsOverlayOpen(false);

    const categories = ['Electronics', 'Clothing', 'Books', 'Food', 'Other'];

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
                            <h3>Change Name</h3>
                        </AdjustmentBox>
                        <AdjustmentBox>
                            <h2>Description</h2>
                            <h3>Change Description</h3>
                        </AdjustmentBox>
                        <AdjustmentBox>
                            <h2>Category</h2>
                            <Select 
                                value={selectedCategory} 
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
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
                                <h2>$100.00</h2>
                                <PlusOrMinusButton>
                                    <FaPlus color='var(--buttonIconColor)'/>
                                </PlusOrMinusButton>
                                </ButtonsDiv>
                            </AdjustmentBox>
                            <AdjustmentBox>
                                <h2>Movement</h2>
                                <ButtonsMovementDiv><h2>Edit Movement</h2></ButtonsMovementDiv>
                            </AdjustmentBox>
                        </AdjustmentButtonsDiv>
                        <button onClick={closeOverlay}>Confirm</button>
                    </OverlayContent>
                </Overlay>
            )}
        </Container>
    );
}