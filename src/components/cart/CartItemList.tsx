import OrderItemCard from "./OrderItemCard";

export default function CartItemList({cartItems}) {
    return (
        <div className="flex-grow">
            <h1 className="text-heading-5 font-semibold text-gray-900 mb-6">Shopping Cart</h1>

            <div className="grid grid-cols-1 gap-6">
                {cartItems.map((item) => (
                    <OrderItemCard item={item} />
                ))}
            </div>
        </div>
    )
}
