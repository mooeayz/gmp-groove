import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-farm-illustration.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full animate-bounce-subtle">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Farm Fresh Quality</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="text-primary">GMP Farms</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Your trusted source for quality day-old chicks, turkeys, and fresh farm produce. 
              Delivered with care, raised with excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                Shop Day-Old Chicks
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Quality</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Fresh</p>
                <p className="text-sm text-muted-foreground">Daily</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Trusted</p>
                <p className="text-sm text-muted-foreground">Since Day 1</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Happy farm animals including chicks and turkeys" 
                className="w-full h-auto animate-float"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full animate-bounce-subtle opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};
