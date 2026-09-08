import { Product } from "./product";

export class CartItem {
    id: number;
    name: string;
    imageUrl: string;
    unit_price: number;
    quantity: number;
    constructor(product: Product)
    {
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.quantity = 1;
        this.unit_price = product.unit_price;

    }
}
