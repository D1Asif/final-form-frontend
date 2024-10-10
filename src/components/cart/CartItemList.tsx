import { TCartItem } from "../../redux/features/cart/cartSlice";
import OrderItemCard from "./OrderItemCard";

export default function CartItemList({ cartItems }: { cartItems: TCartItem[] }) {
    return (
        <div className="flex-grow">
            <h1 className="text-heading-5 font-semibold text-gray-900 mb-6">Shopping Cart</h1>

            <div className="grid grid-cols-1 gap-6">
                {cartItems.map((item) => (
                    <OrderItemCard cartItem={item} fromCart={true} />
                ))}
            </div>
        </div>
    )
}
