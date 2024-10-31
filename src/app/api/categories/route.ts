import { Category } from "@/Interfaces/interface";

export function GET() {
    const data: Category[] = [
        {
            id: 1,
            name: "Category 1",
        },
        {
            id: 2,
            name: "Category 2",
        },
        {
            id: 3,
            name: "Category 3",
        },
    ]
    return new Response(JSON.stringify({data}), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

