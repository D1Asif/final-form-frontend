import { Button } from "keep-react";
import OrderItemCard from "../cart/OrderItemCard";


export default function CheckoutOrderSummary() {
    return (
        <div className="flex-grow">
            <div className="bg-gray-50 p-6 mt-8 lg:mt-0 rounded-lg">
                <h3 className="text-heading-5 font-medium mb-4">Order details</h3>
                <ul className="space-y-4">
                    <OrderItemCard item={{ name: "he", image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png", price: 20, description: "gelodwen" }} />
                    <OrderItemCard item={{ name: "he", image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png", price: 20, description: "gelodwen" }} />
                    <OrderItemCard item={{ name: "he", image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png", price: 20, description: "gelodwen" }} />
                </ul>

                <div className="space-y-4 text-slate-600 font-semibold mt-6">
                    <div className="flex justify-between text-lg">
                        <span>Subtotal:</span>
                        <span>$100</span>
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
                        <span>$110</span>
                    </div>
                </div>
                <Button size="lg" className="w-full mt-6">Place Order</Button>
            </div>
        </div>
    )
}
