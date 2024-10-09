import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import { useParams } from "react-router-dom";
import { Skeleton, SkeletonLine } from "keep-react";
import { useGetProductByIdQuery } from "../redux/api/baseApi";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(productId)
  const product = data?.data;

  return (
    <div className="px-6 md:px-10 pt-[110px] md:pt-[135px] mb-10">
      {
        isLoading ? (
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
          data ? (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <ProductImageGallery images={product.images} />
              <ProductInfo product={product} />
            </div>
          ) : (
            <h3 className="text-heading-6 text-center">Error occurred!</h3>
          )
        )
      }
    </div >
  )
}
