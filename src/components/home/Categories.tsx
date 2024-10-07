import ShoesImage from "../../assets/shoes.png"
import ApparelImage from "../../assets/apparel-3.png"
import EquipmentImage from "../../assets/equipment.png"
import MiscellaneousImage from "../../assets/misc.png"
import { Button } from "keep-react"
import { ArrowRight } from "phosphor-react"
import { Link } from "react-router-dom"

export default function Categories() {
    const categories = [
        {
            title: "Shoes",
            link: "/products?category=shoes",
            img: ShoesImage
        },
        {
            title: "Apparel",
            link: "/products?category=apparel",
            img: ApparelImage
        },
        {
            title: "Equipments",
            link: "/products?category=equipments",
            img: EquipmentImage
        },
        {
            title: "Miscellaneous",
            link: "/products?category=miscellaneous",
            img: MiscellaneousImage
        },
    ]
    return (
        <div className="px-6 md:px-10 py-10">
            <h1 className="text-heading-5 font-semibold mb-5">Shop by Category</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-between">
                {
                    categories.map((item) => (
                        <Link className="rounded-2xl md:flex-1 relative group" to={item.link} key={item.title}>
                            {/* {item.title} */}
                            <img src={item.img} className="rounded-2xl h-full w-full object-cover" alt="" />
                            <div className="opacity-0 group-hover:opacity-100 rounded-lg absolute right-0 left-0 bottom-0 top-0 bg-black/60 transition-all duration-300 ease-in-out">
                            </div>
                            <div className="flex items-center absolute left-2 bottom-2 sm:left-4 sm:bottom-4 text-lg sm:text-2xl font-semibold group-hover:text-white" >
                                {item.title} &nbsp;
                                <Button shape="circle" size="md" className="size-8 md:size-10">
                                    <ArrowRight size={24} weight="bold"  />
                                </Button>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
