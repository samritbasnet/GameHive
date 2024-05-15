import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import FeaturedProducts from "./components/featuredprod";
import SubscribeNewsletter from "./components/subscribenews";
import AboutYourShop from "./components/aboutus";


export default function Page() {
  return (
    <>

      <Navbar />
<div>
<HeroSection/>
<FeaturedProducts/>
<SubscribeNewsletter/>
<AboutYourShop/>
</div>

        
      
    </>
  );
}