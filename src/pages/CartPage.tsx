import CartItemList from "../components/cart/CartItemList";
import CartPriceCard from "../components/cart/CartPriceCard";

export default function CartPage() {

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-14 p-6 md:p-10 rounded-lg border shadow-sm">
        <CartItemList />
        <CartPriceCard />
      </div>
    </div>
  )
}
