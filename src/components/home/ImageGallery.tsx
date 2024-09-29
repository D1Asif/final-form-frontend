import Gallery1 from "../../assets/gallery-1.jpg"
import Gallery2 from "../../assets/gallery-2.jpg"
import Gallery3 from "../../assets/gallery-3.jpg"
import Gallery4 from "../../assets/gallery-4.jpg"
import Gallery5 from "../../assets/gallery-5.jpg"
import Gallery6 from "../../assets/gallery-6.jpg"

export default function ImageGallery() {
    return (
        <div className="px-6 md:px-10 mt-8 mb-10">
            <h1 className="text-center text-heading-3 font-bold mb-8">
                Join Our {" "}
                <span className="text-primary-500">Community!</span>
            </h1>
            <div className=" columns-3 space-y-4 lg:columns-3 ">
                <div className="space-y-4">
                    <img src={Gallery1} className="h-[200px] w-full rounded-xl object-cover" />
                    <img src={Gallery2} className="h-[300px] w-full rounded-xl object-cover" />
                </div>
                <div className="space-y-4">
                    <img src={Gallery3} className="h-[300px] w-full rounded-xl object-cover" />
                    <img src={Gallery4} className="h-[200px] w-full rounded-xl object-cover" />
                </div>
                <div className="space-y-4">
                    <img src={Gallery5} className="h-[350px] w-full rounded-xl object-cover" />
                    <img src={Gallery6} className="h-[150px] w-full rounded-xl object-cover" />
                </div>
            </div>
        </div>
    )
}
