import { useEffect, useState } from "react";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import { useParams } from "react-router-dom";
import { TProduct } from "../interface/product";
import { Skeleton, SkeletonLine } from "keep-react";

export default function ProductDetailsPage() {
  const [product, setProduct] = useState<TProduct | null>(null);

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${productId}`)
      const data = await res.json();
      setProduct(data.data);
    }

    fetchProduct()
  }, [productId]);

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      {
        !product ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Skeleton>
              <SkeletonLine className="w-full h-[400px] lg:h-full" />
            </Skeleton>
            <Skeleton className="space-y-2.5">
              <SkeletonLine className="h-16 w-3/4" />
              <SkeletonLine className="h-8 w-1/3" />
              <SkeletonLine className="h-12 w-1/4" />
              <SkeletonLine className="h-32 w-4/5" />
              <SkeletonLine className="h-8 w-1/3" />
              <SkeletonLine className="h-8 w-1/3" />
              <SkeletonLine className="h-8 w-1/3" />
            </Skeleton>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ProductImageGallery images={product.images} />
            <ProductInfo product={product} />
          </div>
        )
      }
    </div >
  )
}
