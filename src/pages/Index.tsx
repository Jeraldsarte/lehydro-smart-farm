import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechSpecs from "@/components/TechSpecs";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <TechSpecs />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
