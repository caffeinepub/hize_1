import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    name: string;
    description: string;
    price: bigint;
}
export interface CartItem {
    productId: bigint;
    quantity: bigint;
}
export interface backendInterface {
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    getCart(): Promise<Array<CartItem>>;
    getProducts(): Promise<Array<Product>>;
}
