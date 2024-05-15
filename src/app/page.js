import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import FeaturedProducts from "./components/featuredprod";
import SubscribeNewsletter from "./components/subscribenews";

export default function Page() {
  return (
    <>

      <Navbar />
<div>
<HeroSection/>
<FeaturedProducts/>
<SubscribeNewsletter/>
</div>

        
      
    </>
  );
}