import React, { useState } from 'react';
import { ButtonsContainer, Container, FormGroup, Input, Select, TextArea } from './styled';
import { useMain } from '@/context/main';


interface EditModalProps {
    onClose: () => void;
}

export default function EditModal({ onClose }: EditModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        quantity: ''
    });

    const {categories} = useMain();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementará a lógica da API posteriormente
        console.log('Form submitted:', formData);
        //onClose();
    };


    return (
        <Container onClick={(e) => e.stopPropagation()}>
            <h2>Edit Product</h2>
            <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <label>Name</label>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Product name"
                    />
                </FormGroup>

                <FormGroup>
                    <label>Description</label>
                    <TextArea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Product description"
                    />
                </FormGroup>

                <FormGroup>
                    <label>Category</label>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </Select>
                </FormGroup>

                <FormGroup>
                    <label>Price</label>
                    <Input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="$0.00"
                    />
                </FormGroup>

                <FormGroup>
                    <label>Quantity</label>
                    <Input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="0"
                    />
                </FormGroup>

                <ButtonsContainer>
                    <button type="button" onClick={onClose} className="cancel">
                        Cancel
                    </button>
                    <button type="submit" className="confirm">
                        Save Changes
                    </button>
                </ButtonsContainer>
            </form>
        </Container>
    );
}