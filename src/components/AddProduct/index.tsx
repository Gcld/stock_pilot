import React, { useEffect, useState } from 'react';
import { Container, Form, Input, TextArea, Select, SubmitButton } from "./styled";
import { api } from '@/service/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Category } from '@/Interfaces/interface';

interface Props {
    getProducts: () => Promise<void>;
}

export default function AddProduct({ getProducts }: Props) {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock_quantity: 0,
        category: 0,
    });

    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

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
            const response = await api.post('/products/', product);
            console.log('Product submitted:', response.data.data);
            toast.success(response.data.data.message, {
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
                stock_quantity: 0,
                category: 0,
            });
            getProducts();
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
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </Select>
                <h3>Quantity</h3>
                <Input
                    type="number"
                    name="stock_quantity"
                    placeholder="0"
                    value={product.stock_quantity}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Add Product</SubmitButton>
            </Form>
            <ToastContainer />
        </Container>
    );
}