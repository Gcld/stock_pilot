import React, { useState } from 'react';
import { Container, Form, Input, TextArea, Select, SubmitButton } from "./styled";
import { api } from '@/service/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await api.post('/product', product);
            console.log('Product submitted:', response.data);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setProduct({
                name: '',
                description: '',
                price: '',
                category: '',
                quantity: ''
            });
        } catch (error) {
            console.error('Error submitting product:', error);
            toast.error('Failed to add product. Please try again.', {
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
        <Container>
            <Form onSubmit={handleSubmit}>
            <h3>Name</h3>
                <Input
                    type="text"
                    name="name"
                    placeholder="Product name..."
                    value={product.name}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                />
                <h3>Description</h3>
                <TextArea
                    name="description"
                    placeholder="Product description..."
                    value={product.description}
                    onChange={handleChange}
                    required
                />
                <h3>Price</h3>
                <Input
                    type="text"
                    name="price"
                    placeholder="$00.00"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
                <h3>Category</h3>
                <Select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">New category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="food">Food</option>
                </Select>
                <h3>Quantity</h3>
                <Input
                    type="number"
                    name="quantity"
                    placeholder="0"
                    value={product.quantity}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Add Product</SubmitButton>
            </Form>
            <ToastContainer />
        </Container>
    );
}