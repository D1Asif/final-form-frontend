import { useEffect, useState } from "react";
import Actions from "../components/product/Actions";
import ProductList from "../components/product/ProductList";
import PaginationComponent from "../components/ui/PaginationComponent";
import { useSearchParams } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const searchParams = useSearchParams();

  console.log(searchParams);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
      const data = await res.json()
      setProducts(data.data)
    }
    fetchProducts()
  }, []);

  return (
    <div className="px-6 md:px-10 pt-28 md:pt-[135px] mb-10">
      <div className="flex flex-col md:flex-row mb-5 md:mb-0 justify-between">
        <h1 className="text-heading-5 font-semibold mb-7">Products</h1>
        <Actions />
      </div>
      <ProductList products={products} />
      <div className="flex justify-center mt-10">
        <div>
          <PaginationComponent />
        </div>
      </div>
    </div>
  )
}
