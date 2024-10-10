import { Link } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/baseApi"
import { deleteCartItem, TCartItem, updateQuantity } from "../../redux/features/cart/cartSlice"
import { NumberInput, NumberInputBox, NumberInputButton } from "keep-react";
import { Minus, Plus } from "phosphor-react";
import { useAppDispatch } from "../../redux/hooks";

type TOrderItemCard = {
    cartItem: TCartItem,
    fromCart?: boolean
}

export default function OrderItemCard({ cartItem, fromCart }: TOrderItemCard) {
    const { data } = useGetProductByIdQuery(cartItem.productId);
    const item = data?.data;

    const dispatch = useAppDispatch()

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 border-b border-gray-200 pb-6"
        >
            {/* Product Image and Description */}
            <div className="flex items-center w-full md:w-auto gap-6">
                <img
                    src={item?.images[0]}
                    alt={item?.name}
                    className="w-24 h-24 object-cover rounded-md"
                />
                <div className="max-w-[500px]">
                    <Link to={`/products/${item?._id}`}>
                        <h2 className="text-lg font-semibold text-gray-800">{item?.name}</h2>
                    </Link>
                    <p className="text-sm text-gray-500">{item?.category}</p>
                </div>
            </div>

            {/* Quantity, Price, and Remove Button */}
            <div className="flex items-center justify-between w-full md:w-[320px]">
                {fromCart && (
                    <NumberInput className="max-w-xs">
                        <NumberInputButton
                            disabled={cartItem?.quantity === 1}
                            onClick={() => dispatch(updateQuantity({ productId: cartItem?.productId, quantity: -1 }))}
                        >
                            <Minus size={16} color="#455468" />
                        </NumberInputButton>
                        <NumberInputBox disabled value={cartItem?.quantity} className="w-12 border-x mx-4" />
                        <NumberInputButton
                            onClick={() => dispatch(updateQuantity({ productId: cartItem?.productId, quantity: +1 }))}
                        >
                            <Plus size={16} color="#455468" />
                        </NumberInputButton>
                    </NumberInput>
                )}
                {
                    !fromCart && (
                        // <NumberInput className="max-w-xs">
                        //     x
                        //     <NumberInputBox disabled value={cartItem.quantity} className="w-8" />
                        // </NumberInput>
                        <div className="ml-10">x {cartItem?.quantity}</div>
                    )
                }
                <p className="text-lg font-medium text-gray-900">
                    ${(item?.price * cartItem?.quantity).toFixed(2)}
                </p>
                {fromCart && (
                    <button
                        className="text-red-500 hover:text-red-600 transition-colors"
                        onClick={() => dispatch(deleteCartItem({ productId: cartItem?.productId }))}
                    >
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
                )}
            </div>
        </div>
    )
}
