import { useState } from "react";

export default function ProductImageGallery({images}: {images: string[]}) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse gap-4 sm:gap-2 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Thumbnail images on the left */}
            <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
                {images?.map((image, index) => (
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
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
