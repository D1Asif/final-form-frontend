import { Barbell, Recycle, Truck } from "phosphor-react";

export default function BenefitSection() {
    const benefits = [
        {
            title: "Authentic Products",
            description: "FinalForm is committed to providing authentic fitness products, ensuring you receive the highest quality equipment for your workouts.",
            icon: <Barbell size={100} weight="bold" />
        },
        {
            title: "Fast Delivery",
            description: "We prioritize fast and efficient delivery so you can start your fitness journey without delay.",
            icon: <Truck size={100} weight="bold" />
        },
        {
            title: "Eco-Friendly",
            description: "We are dedicated to sustainability and offer eco-friendly options, making a positive impact on the environment while supporting your health goals.",
            icon: <Recycle size={100} weight="bold" />
        },
    ]
    return (
        <div className="px-6 md:px-10 py-10 md:py-14">
            {/* <h1 className="text-heading-5 font-semibold mb-5">Benefits</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    benefits.map((item) => (
                        <div className="flex flex-col items-center" key={item.title}>
                            {item.icon}
                            <h1 className="text-center font-bold text-3xl">
                                {item.title}
                            </h1>
                            <div className="text-xl text-gray-500 p-5 text-center">
                                {item.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
