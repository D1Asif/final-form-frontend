import { Button } from "keep-react";
import OrderItemCard from "../cart/OrderItemCard";
import { useAppSelector } from "../../redux/hooks";


export default function CheckoutOrderSummary() {
    const { items: cartItems } = useAppSelector((selector) => selector.cart);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div className="flex-grow">
            <div className="bg-gray-50 p-6 mt-8 lg:mt-0 rounded-lg">
                <h3 className="text-heading-5 font-medium mb-4">Order details</h3>
                <ul className="space-y-4">
                    {
                        cartItems.map((cartItem) => (
                            <OrderItemCard cartItem={cartItem} key={cartItem.productId} />
                        ))
                    }
                </ul>

                <div className="space-y-4 text-slate-600 font-semibold mt-6">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Tax:</span>
                        <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Shipping:</span>
                        <span>$10</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-xl text-slate-800">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>
                </div>
                <Button size="lg" className="w-full mt-6">Place Order</Button>
            </div>
        </div>
    )
}
