import BenefitSection from "../components/home/BenefitSection";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import ImageGallery from "../components/home/ImageGallery";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Categories />
            <FeaturedProducts />
            <BenefitSection />
            <ImageGallery />
        </>
    )
}
