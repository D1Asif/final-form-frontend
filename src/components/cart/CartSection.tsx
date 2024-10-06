import { Button } from "keep-react";


export default function CartSection() {
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

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div className="flex flex-col lg:flex-row justify-between lg:gap-14 p-6 md:p-10 rounded-lg border shadow-sm">
            <div className="flex-grow">
                <h1 className="text-heading-5 font-semibold text-gray-900 mb-6">Shopping Cart</h1>

                <div className="grid grid-cols-1 gap-6">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 border-b border-gray-200 pb-6"
                        >
                            {/* Product Image and Description */}
                            <div className="flex items-center w-full md:w-auto space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>

                            {/* Quantity, Price, and Remove Button */}
                            <div className="flex items-center justify-between w-full md:w-auto space-x-4">
                                <select className="border border-gray-300 rounded-md p-2">
                                    <option>1</option>
                                    {/* Add dynamic quantity logic here */}
                                </select>
                                <p className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                                <button className="text-red-500 hover:text-red-600 transition-colors">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
                        <Button size="lg">Confirm Payment</Button>
                        <Button size="lg" variant="outline">Continue Shipping</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
