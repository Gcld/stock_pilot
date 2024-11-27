import React, { useState } from 'react';
import { ButtonsContainer, Container, FormGroup, Input, Select, TextArea } from './styled';
import { useMain } from '@/context/main';
import { api } from '@/service/api';
import { toast } from 'react-toastify';

interface EditModalProps {
    id: number;
    onClose: () => void;
    getProducts: () => Promise<void>;
}

export default function EditModal({ onClose, id, getProducts }: EditModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        stock_quantity: ''
    });

    const { categories } = useMain();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
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
            const response = await api.patch(`/products/${id}/`, newData);
            console.log('Form submitted:', response.data.data);
            console.log('Product submitted:', response.data.data);
            toast.success('Product updated successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            getProducts();
            onClose(); 
        } catch (error) {
            console.error('Error submitting form:', error);
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
                        name="stock_quantity"
                        value={formData.stock_quantity}
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