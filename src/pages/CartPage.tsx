import CartItemList from "../components/cart/CartItemList";
import CartPriceCard from "../components/cart/CartPriceCard";

export default function CartPage() {
  const cartItems = [
    {
      name: "Apple Watch Series 7 - 44mm",
      description: "Golden",
      price: 259.0,
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png",
    },
    {
      name: "Beylob 90 Speaker",
      description: "Space Gray",
      price: 99.0,
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-2.png",
    },
    {
      name: "Beoplay M5 Bluetooth Speaker",
      description: "Silver Collection",
      price: 129.0,
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-3.png",
    },
    {
      name: "Apple Watch Series 7 - 44mm",
      description: "Golden",
      price: 379.0,
      image: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/1/product-1.png",
    },
  ];

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      <div className="flex flex-col lg:flex-row justify-between lg:gap-14 p-6 md:p-10 rounded-lg border shadow-sm">
        <CartItemList cartItems={cartItems} />
        <CartPriceCard cartItems={cartItems} />
      </div>
    </div>
  )
}
