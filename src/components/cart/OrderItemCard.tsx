
export default function OrderItemCard({ item, fromCart }) {
    return (
        <div
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
                {fromCart && (
                    <select className="border border-gray-300 rounded-md p-2">
                        <option>1</option>
                        {/* Add dynamic quantity logic here */}
                    </select>
                )}
                <p className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                {fromCart && (
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
                )}
            </div>
        </div>
    )
}
