import HeroSection from "../components/Herosection";
import ShopByCategory from "../components/ShopByCategory";
import GlowSpotlight from "../components/GlowSpotlight";
import AboutSection from '../components/AboutSection';
import DailyWins from '../components/DailyWins';
import VideoStoriesSection from '../components/VideoStoriesSection';
import MonsoonEssentials from '../components/MonsoonEssentials';
import ProductPlaybook from '../components/ProductPlaybook';
import CustomerReviews from '../components/CustomerReviews';
import LatestPosts from '../components/LatestPosts';
import BodyCareBanner from '../components/BodyCareBanner';
import FeaturedIn from '../components/FeaturedIn';
function Home() {
  return (
    <>
      <HeroSection />
      <ShopByCategory />
      <GlowSpotlight />
      <AboutSection />
      <DailyWins />
      <VideoStoriesSection />
      <MonsoonEssentials />
      <ProductPlaybook />
      <CustomerReviews />
      <LatestPosts />
      <BodyCareBanner />
      <FeaturedIn />
    </>
  );
}
export default Home;    