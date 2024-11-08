import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    console.log(request.body);
    try{
        const body = await request.json();
        const data = {
                name: body.name,
                description: body.description,
                price: body.price,
                stock_quantity: body.stock_quantity,
                category: {
                    id: 1,
                    name: "Category 1"
                }
            }
        return new Response(JSON.stringify({data, message: "Product created successfully!"}), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({error}), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}