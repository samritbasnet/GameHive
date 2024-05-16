import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import FeaturedProducts from "./components/featuredprod";
import SubscribeNewsletter from "./components/subscribenews";
import AboutYourShop from "./components/aboutus";
import LatestProducts from "./components/productblog";
import ProductRatings from "./components/review";
import Footer from "./components/footer";
export default function Page() {
  return (
    <>

      <Navbar />
<div>
<HeroSection/>
<FeaturedProducts/>
<SubscribeNewsletter/>
<AboutYourShop/>
<LatestProducts/>
<ProductRatings/>
<Footer/>
</div>

        
      
    </>
  );
}