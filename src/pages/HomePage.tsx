import { Button } from "keep-react";
import NavbarComponent from "../components/ui/NavbarComponent";
import { ArrowRight } from "phosphor-react";


export default function HomePage() {
    return (
        <>
            <div className="h-[100vh] bg-hero-image bg-center">
                <div className="pt-4 md:pt-5 px-4 md:px-10 fixed w-full">
                    <NavbarComponent />
                </div>
                <div className="absolute bottom-4 text-white px-4 md:px-10 pb-10">
                    <h1 className="text-heading-1 font-bold">
                        Unleash Your <br />
                        Strongest Self
                    </h1>
                    <p className="text-heading-5">
                        <i>Transform your body. Empower your mind.</i>
                    </p>
                    <Button size="xl" className="mt-3">
                        Explore
                        <ArrowRight size={20} weight="bold" className="ml-1.5" />
                    </Button>
                </div>
            </div>
            <div className="h-[200vh]">
                <h1>Products</h1>
            </div>
        </>
    )
}
