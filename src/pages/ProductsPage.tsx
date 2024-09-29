import Actions from "../components/product/Actions";
import ProductList from "../components/product/ProductList";
import PaginationComponent from "../components/ui/PaginationComponent";


export default function ProductsPage() {
  const products = [
    {
      name: "Nike Revolution",
      images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png"],
      category: "shoes",
      price: 50,
      tags: ["featured"]
    }
  ]

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
