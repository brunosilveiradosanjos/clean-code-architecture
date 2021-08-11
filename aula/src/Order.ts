import Coupon from "./Coupon";
import Cpf from "./Cpf";
import OrderItem from "./OrderItem";

export default class Order {
    public cpf: Cpf;
    public items: OrderItem[];
    public coupon: Coupon | undefined;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.items = [];
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }

    addItem(description: string, price: number, quantity: number) {
        this.items.push(new OrderItem(description, price, quantity))
    }

    getTotal() {
        let total = 0;
        for (const orderItem of this.items) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total = total * (1 - this.coupon.percentage / 100)
        }
        return total;
    }


}