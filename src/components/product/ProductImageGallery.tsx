import { useState } from "react";

export default function ProductImageGallery() {
    const [selectedImage, setSelectedImage] = useState(
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png"
    );

    const images = [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/450ed1df-8e17-4d87-a244-85697874661c/NIKE+REVOLUTION+7.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/41ee2443-d888-4d05-a55b-29b049f04ce0/NIKE+REVOLUTION+7.png",
    ]


    return (
        <div className="flex flex-col-reverse gap-2 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Thumbnail images on the left */}
            <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        className={`p-1 border-[3px] rounded-md transition ${selectedImage === image ? 'border-primary-500' : 'border-transparent'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-20 h-20 object-cover rounded-md"
                        />
                    </button>
                ))}
            </div>

            {/* Selected image on the right */}
            <div className="flex-1">
                <div className="w-full h-full">
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
