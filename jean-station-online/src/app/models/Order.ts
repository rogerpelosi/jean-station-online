import { OrderProduct } from "./OrderProduct";

export class Order{
    orderNo:number
    userId:number;
    deliveryAddress:string;
    deliveryStatus:string;
    products: OrderProduct[];
    constructor(){}
}