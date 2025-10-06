import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Availability } from "@/components/Availability";
import { Payment } from "@/components/Payment";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Availability />
      <Payment />
      <Footer />
    </div>
  );
};

export default Index;
