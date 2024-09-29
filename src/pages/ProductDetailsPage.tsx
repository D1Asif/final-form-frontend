import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";

export default function ProductDetailsPage() {
  return (
    <div className="px-6 md:px-10 pt-[135px] mb-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ProductImageGallery />
        <ProductInfo />
      </div>
    </div>
  )
}
