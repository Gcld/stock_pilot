export interface Product {
    id: number,
    name: string,
    description: string,
    price: string,
    stock_quantity: number,
    category: Category
}

export interface Category {
    id: number,
    name: string
}

export interface HistoryItem {
    id: number;
    product: {
        id: number;
        name: string;
    };
    movement_type: 'entrada' | 'saida';
    quantity: number;
    reason: string;
    created_at: string;
}