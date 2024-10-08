import { useEffect, useState } from "react";
import Actions from "../components/product/Actions";
import ProductList from "../components/product/ProductList";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "keep-react";
import { TProduct } from "../interface/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [searchParams] = useSearchParams();
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const params = new URLSearchParams(searchParams);
  params.set("page", page.toString())

  const url = `${import.meta.env.VITE_API_BASE_URL}/products` + "?" + params.toString()

  useEffect(() => {
    setProducts([])
    setPage(1)
    setHasMore(true)
  }, [searchParams])

  useEffect(() => {
    const fetchMoreProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        // Append new products to the current list of products
        setProducts((prevProducts) => [...prevProducts, ...data.data]);
  
        // If no more products are returned, set hasMore to false
        if (data.data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoreProducts()
  }, [url]);

  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 700 &&
        !loading &&
        hasMore
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <div className="px-6 md:px-10 pt-28 md:pt-[135px] mb-10">
      <div className="flex flex-col md:flex-row mb-5 md:mb-0 justify-between">
        <h1 className="text-heading-5 font-semibold mb-7">Products</h1>
        <Actions />
      </div>
      {
        products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <div>
            {!hasMore && <h1 className="text-heading-6 text-center">No Product found!</h1>}
          </div>
        )
      }
      {
        loading && (
          <div className="flex justify-center pt-14 pb-6">
            <Spinner color="info" size="lg" />
          </div>
        )
      }
    </div>
  )
}
