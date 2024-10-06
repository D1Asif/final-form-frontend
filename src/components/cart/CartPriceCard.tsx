import { Button } from "keep-react";
import { Link } from "react-router-dom";


export default function CartPriceCard({ cartItems }) {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div className="flex-grow">
            <div className="mt-10 flex flex-col flex-grow p-6 space-y-6 bg-gray-100 rounded-lg">
                {/* Subtotal, Tax, Shipping, and Total */}
                <div className="space-y-4 text-slate-600 font-semibold">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Tax:</span>
                        <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span>Shipping:</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-xl text-slate-800">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Buttons */}
                <div className="flex flex-col gap-4">
                    <Link to="/checkout">
                        <Button size="lg" className="w-full">Checkout</Button>
                    </Link>
                    <Button size="lg" variant="outline">Continue Shipping</Button>
                </div>
            </div>
        </div>
    )
}
