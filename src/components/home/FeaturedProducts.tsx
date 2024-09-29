import { Button } from "keep-react"
import { ProductCard } from "../product/ProductCard"
import { ArrowRight } from "phosphor-react"


export default function FeaturedProducts() {
    const featuredProducts = [
        {
            name: "Nike Revolution",
            images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png"],
            category: "shoes",
            price: 50,
            tags: ["featured"]
        }
    ]
    return (
        <div className="px-6 md:px-10 py-10">
            <h1 className="text-heading-5 font-semibold mb-5">Featured Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    featuredProducts.map((product) => (
                        <ProductCard product={product} />
                    ))
                }
                <ProductCard product={featuredProducts[0]} />
                <ProductCard product={featuredProducts[0]} />
                <ProductCard product={featuredProducts[0]} />
                {/* <div className="flex justify-center items-center w-full h-full border rounded-xl hover:bg-gray-200">
                    <div>
                        <Button size="lg">
                            Explore More &nbsp;
                        </Button>

                    </div>
                </div> */}
            </div>
            <div className="flex justify-center py-8">
                <Button size="lg">
                    Explore More &nbsp;
                    <ArrowRight size={24} weight="bold" />
                </Button>
            </div>
        </div>
    )
}
