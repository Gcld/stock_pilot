import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageContainer } from './styled';

interface ProductImageProps {
    productId: number;
    alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ productId, alt }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const cachedImage = localStorage.getItem(`product_image_${productId}`);
                if (cachedImage) {
                    setImageUrl(cachedImage);
                } else {
                    const response = await axios.get(
                        `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=product&orientation=squarish`
                    );
                    const newImageUrl = response.data.urls.small;
                    setImageUrl(newImageUrl);
                    localStorage.setItem(`product_image_${productId}`, newImageUrl);
                }
            } catch (error) {
                console.error("Error fetching random image:", error);
                setImageUrl("/path/to/default/image.jpg");
            }
        };

        fetchRandomImage();
    }, [productId]);

    return <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} role="img" aria-label={alt} />;
};

export default ProductImage;