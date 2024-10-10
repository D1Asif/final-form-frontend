import { Button, toast } from "keep-react";
import { CreditCard, GlobeHemisphereEast, Recycle, Star } from "phosphor-react";
import { TProduct } from "../../interface/product";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";


export default function ProductInfo({product}: {product: TProduct}) {
    const dispatch = useAppDispatch();
    const {items} = useAppSelector((selector) => selector.cart)

    const isInCart = items.find((item) => item.productId === product._id);

    const handleAddToCart = () => {
        dispatch(addToCart({productId: product._id, quantity: 1, price: product.price}))

        toast.success("Product added to cart")
    }

    return (
        <div className="max-w-lg">
            {/* Product Title */}
            <h1 className="text-3xl font-bold mb-2">
                {product?.name}
            </h1>

            {/* Star Rating and Reviews */}
            <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} weight="fill" size={22} />
                    ))}
                </div>
                <p className="ml-2 text-md text-gray-500">(157 Reviews)</p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline space-x-3 mb-4">
                <p className="text-2xl font-bold text-black">${product.price}</p>
                {/* <p className="text-gray-500 line-through">$99</p> */}
            </div>
            {/* <p className="text-gray-500 mb-4">Save 50% right now</p> */}

            {/* Features */}
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-500 space-y-1 text-lg mb-4">
                {product.description}
            </p>

            {/* Colors */}
            <h2 className="text-xl font-semibold mb-2">Colors</h2>
            <div className="flex space-x-3 mb-6">
                {['Green', 'Red', 'Blue', 'Gray'].map((color, i) => (
                    <label key={i} className="cursor-pointer">
                        <input type="radio" name="color" value={color} className="sr-only" />
                        <span className={`block w-8 h-8 rounded-full ${color.toLowerCase() === 'green' ? 'bg-green-600' : color.toLowerCase() === 'red' ? 'bg-red-600' : color.toLowerCase() === 'blue' ? 'bg-blue-600' : 'bg-gray-600'}`}></span>
                    </label>
                ))}
            </div>

            <h2 className="text-xl font-semibold mb-2">Stock</h2>
            <p className="text-gray-500 space-y-1 text-lg mb-4">
                {product.stock ? product.stock : "Out of Stock"}
            </p>

            {/* Buttons */}
            <Button 
                className="mb-5 text-black" 
                color="warning" size="lg" 
                onClick={handleAddToCart}
                disabled={isInCart?.quantity === product.stock || !product.stock}
            >
                Add to cart
            </Button>

            {/* Additional Info */}
            <ul className="space-y-2 text-lg">
                <li className="flex items-center space-x-2 text-gray-600">
                    <GlobeHemisphereEast size={22} color="#1b4dff" />
                    <span>Free shipping worldwide</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                    <CreditCard size={22} color="#1b4dff" />
                    <span>100% Secured Payment</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                    <Recycle size={22} color="#1b4dff" />
                    <span>Made with recyclable materials</span>
                </li>
            </ul>
        </div>
    );
}