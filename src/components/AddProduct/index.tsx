import React, { useState } from 'react';
import { Container, Form, Input, TextArea, Select, SubmitButton } from "./styled";

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Product submitted:', product);
        // Aqui você pode adicionar a lógica para enviar o produto para o backend
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
        </Container>
    );
}