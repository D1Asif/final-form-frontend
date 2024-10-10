import { Button, Spinner } from "keep-react"
import { ArrowRight } from "phosphor-react"
import ProductList from "../product/ProductList"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGetProductsQuery } from "../../redux/api/baseApi"

export default function FeaturedProducts() {
    const { data, isLoading } = useGetProductsQuery({ tags: "featured" });
    const featuredProducts = data?.data;
    // const [featuredProducts, setFeaturedProducts] = useState([]);

    // useEffect(() => {
    //     const fetchFeaturedProducts = async () => {
    //         const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products?tags=featured`)
    //         const data = await res.json()
    //         setFeaturedProducts(data.data)
    //     }
    //     fetchFeaturedProducts()
    // }, []);

    return (
        <div className="px-6 md:px-10 py-10">
            <h1 className="text-heading-5 font-semibold mb-5">Featured Products</h1>
            <ProductList products={featuredProducts} />
            {
                isLoading && (
                    <div className="flex justify-center pt-14 pb-6">
                        <Spinner color="info" size="lg" />
                    </div>
                )
            }
            <div className="flex justify-center py-8">
                <Link to="/products">
                    <Button size="lg">
                        Explore More &nbsp;
                        <ArrowRight size={24} weight="bold" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}
