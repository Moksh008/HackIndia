import Hero from "@/components/Hero";
// import Platform from "@/components/FeaturedProperties";
// import Feature from "@/components/Services";
import Authen from "@/components/Authen";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConditionalNavigation from "@/components/ConditionalNavigation";
import Testimony from "@/components/Testimony";
import Features from "@/components/Services";


const Index = () => {
  return (
    <div className="min-h-screen">
      <ConditionalNavigation />
      <Hero />
      <Testimony />
      <Features />
      
      <Authen/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
