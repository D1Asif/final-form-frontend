import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Categories />
            <FeaturedProducts />
        </>
    )
}
