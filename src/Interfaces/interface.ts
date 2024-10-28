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
