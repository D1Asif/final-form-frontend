import { Button } from "keep-react";
import { CreditCard, GlobeHemisphereEast, Recycle, Star } from "phosphor-react";


export default function ProductInfo() {
    return (
        <div className="max-w-lg">
            {/* Product Title */}
            <h1 className="text-3xl font-bold mb-2">Jenny’s Closets - The winter top for female, green</h1>

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
                <p className="text-2xl font-bold text-black">$49</p>
                {/* <p className="text-gray-500 line-through">$99</p> */}
            </div>
            {/* <p className="text-gray-500 mb-4">Save 50% right now</p> */}

            {/* Features */}
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-500 space-y-1 text-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eveniet fuga molestiae nostrum in! Accusamus assumenda earum, velit delectus nam commodi esse optio sequi reiciendis ad rem, sapiente laboriosam dolor.
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

            {/* Buttons */}
            <Button className="mb-5 text-black" color="warning" size="lg">
                Add to Cart
            </Button>
            {/* <Button className="mb-5" size="lg">
                Add to Cart
            </Button> */}

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


// export default function ProductInfo() {
//     return (
//         <div className="max-w-lg">
//             {/* Product Title */}
//             <h1 className="text-3xl font-bold mb-2">Jenny’s Closets - The winter top for female, green</h1>

//             {/* Star Rating and Reviews */}
//             <div className="flex items-center mb-4">
//                 <div className="flex text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                         <svg
//                             key={i}
//                             className="w-5 h-5"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                         >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                     ))}
//                 </div>
//                 <p className="ml-2 text-sm text-gray-600">(157 Reviews)</p>
//             </div>

//             {/* Pricing */}
//             <div className="flex items-baseline space-x-3 mb-4">
//                 <p className="text-2xl font-bold text-black">$49</p>
//                 <p className="text-gray-500 line-through">$99</p>
//             </div>
//             <p className="text-gray-500 mb-4">Save 50% right now</p>

//             {/* Features */}
//             <h2 className="text-lg font-semibold mb-2">Features</h2>
//             <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
//                 <li>Made with full cotton</li>
//                 <li>Slim fit for any body</li>
//                 <li>Quality control by JC</li>
//             </ul>

//             {/* Colors */}
//             <h2 className="text-lg font-semibold mb-2">Colors</h2>
//             <div className="flex space-x-3 mb-6">
//                 {['Green', 'Red', 'Blue', 'Gray'].map((color, i) => (
//                     <label key={i} className="cursor-pointer">
//                         <input type="radio" name="color" value={color} className="sr-only" />
//                         <span className={`block w-8 h-8 rounded-full ${color.toLowerCase() === 'green' ? 'bg-green-600' : color.toLowerCase() === 'red' ? 'bg-red-600' : color.toLowerCase() === 'blue' ? 'bg-blue-600' : 'bg-gray-600'}`}></span>
//                     </label>
//                 ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex space-x-4 mb-6">
//                 <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Add to cart</button>
//                 <button className="border border-gray-300 p-2 rounded-md hover:border-gray-400 transition">
//                     <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                     </svg>
//                 </button>
//             </div>

//             {/* Additional Info */}
//             <ul className="space-y-2">
//                 <li className="flex items-center space-x-2 text-gray-600">
//                     <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>Free shipping worldwide</span>
//                 </li>
//                 <li className="flex items-center space-x-2 text-gray-600">
//                     <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                     </svg>
//                     <span>100% Secured Payment</span>
//                 </li>
//                 <li className="flex items-center space-x-2 text-gray-600">
//                     <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                     <span>Made by the Professionals</span>
//                 </li>
//             </ul>
//         </div>
//     );
// }