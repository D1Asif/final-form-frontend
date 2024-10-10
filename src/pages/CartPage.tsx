import CartItemList from "../components/cart/CartItemList";
import CartPriceCard from "../components/cart/CartPriceCard";
import { useAppSelector } from "../redux/hooks";

export default function CartPage() {
  const { items } = useAppSelector((selector) => selector.cart);

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      {
        items.length > 0 ? (
          <div className="flex flex-col lg:flex-row justify-between lg:gap-14 p-6 md:p-10 rounded-lg border shadow-sm">
            <CartItemList cartItems={items} />
            <CartPriceCard cartItems={items} />
          </div>
        ) : (
          <div>
            <h1 className="text-heading-5 font-semibold text-gray-900 mb-3">Shopping Cart</h1>
            <h1 className="text-heading-6 text-center py-8">The cart is empty!</h1>
          </div>
        )
      }
    </div>
  )
}
