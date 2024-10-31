// src/app/api/products/[id]/history/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const productId = params.id;

    const historyData = [
        {
            change: "Change of name from Air Max to Air Max 97",
            date: "16/10/2024",
        },
        {
            change: "Price updated from $150 to $180",
            date: "15/10/2024",
        },
        {
            change: "Stock quantity increased by 50",
            date: "14/10/2024",
        },
    ];

    return NextResponse.json(historyData);
}