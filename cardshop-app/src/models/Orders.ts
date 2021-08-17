export class Order{
    order_id: number;
    product_id: number;
    product_name: string;
    product_price: number;
    order_qty: number;
    order_price: number;

    constructor(){
        this.order_id = 0;
        this.product_id = 0;
        this.product_name = "";
        this.product_price = 0;
        this.order_qty = 0;
        this.order_price = 0;
    }
}