import React, { useState, useEffect } from 'react';
import { Container, ProductImageBig, ProductImageSmall } from "./styled";
import axios from 'axios';
import ProductImage from '../ProuctImage';

interface ProductImagesProps {
    productId: number;
    productName: string;
}

export default function ProductImages({ productId, productName }: ProductImagesProps) {
    const [thumbnailUrls, setThumbnailUrls] = useState<string[]>([]);

    useEffect(() => {
        const fetchThumbnails = async () => {
            try {
                const promises = Array(4).fill(null).map(() => 
                    axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=product&orientation=squarish`)
                );
                const responses = await Promise.all(promises);
                const urls = responses.map(response => response.data.urls.small);
                console.log("Fetched thumbnail URLs:", urls);
                setThumbnailUrls(urls);
            } catch (error) {
                console.error("Error fetching thumbnail images:", error);
                setThumbnailUrls(Array(4).fill('/path/to/default/image.jpg'));
            }
        };

        fetchThumbnails();
    }, []);

    return (
        <Container>
            <ProductImageBig>
                <ProductImage productId={productId} alt={productName} />
            </ProductImageBig>
            <div className="productImagesDiv">
                {thumbnailUrls.map((url, index) => (
                    <ProductImageSmall 
                        key={index} 
                        style={{ backgroundImage: `url(${url})` }}
                        role="img"
                        aria-label={`Product thumbnail ${index + 1}`}
                    />
                ))}
            </div>
        </Container>
    );
}