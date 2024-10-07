import { TProduct } from "../../interface/product";
import { ProductCard } from "./ProductCard";

export default function ProductList({ products }: { products: TProduct[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                products?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))
            }
        </div>
    )
}
