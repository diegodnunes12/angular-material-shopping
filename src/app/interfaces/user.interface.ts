import { ProductInterface } from "./product.interface";

export interface UserInterface {
    id: number;
    email: string;
    password: string;
    name: number;
    favorites: ProductInterface[];
}