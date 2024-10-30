import { Product } from "@/Interfaces/interface";

export function GET() {
    const data: Product[] = [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: "10.00",
            stock_quantity: 10,
            category: {
                id: 1,
                name: "Category 1"
            }
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: "20.00",
            stock_quantity: 20,
            category: {
                id: 2,
                name: "Category 2"
            }
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description 3",
            price: "30.00",
            stock_quantity: 30,
            category: {
                id: 3,
                name: "Category 3"
            }
        },
    ]
    return new Response(JSON.stringify({data}), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}