import { ProductDTO } from "./ProductDTO";

export class Order{
    orderNo:number
    userId:number;
    deliveryAddress:string;
    deliveryStatus:string;
    products: ProductDTO[];
    constructor(){}
}