import BannerSection from "@/components/homePageComponents/BannerSection";
import BestDetails from "@/components/homePageComponents/BestDeals";
import FeaturedProducts from "@/components/homePageComponents/FeaturedProducts";
import FlashSales from "@/components/homePageComponents/FlashSales";
import HeroSection from "@/components/homePageComponents/HeroSection";
import KeyFeatures from "@/components/homePageComponents/KeyFeatures";
import LargBanner from "@/components/homePageComponents/LargeBanner";
import LatestNews from "@/components/homePageComponents/LatestNews";
import ProductsSlider from "@/components/homePageComponents/ProductsSlider";
import Subscribtion from "@/components/homePageComponents/Subscribtion";


const HomePage = () => {
  
  return (
    <>
      <HeroSection/>
      <KeyFeatures/>
      <BestDetails/>
      <ProductsSlider/>
      <FeaturedProducts/>
      <BannerSection/>
      <FlashSales/>
      <LargBanner/>
      <LatestNews/>
      <Subscribtion/>
    </>
  );
};

export default HomePage;
