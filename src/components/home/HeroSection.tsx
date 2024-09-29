import { Button } from "keep-react";
import { ArrowRight } from "phosphor-react";

export default function HeroSection() {
    return (
        <div className="h-[100vh] bg-hero-image bg-center">
            <div className="absolute bottom-4 text-white px-6 md:px-10 pb-10">
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
    )
}
